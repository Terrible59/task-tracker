import axios from 'axios';
import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

import { CONST } from "../../../constants";

async function refreshAccessToken(tokenObject) {
    try {
        // Get a new set of tokens with a refreshToken
        const tokenResponse = await axios.post(CONST.API_URL + 'auth/refresh', {
            refresh_token: tokenObject.refreshToken
        });

        return {
            ...tokenObject,
            accessToken: tokenResponse.data.access_token,
            accessTokenExpiry: parseInt(tokenResponse.data.expires_in) * 1000 + Date.now(),
            refreshToken: tokenResponse.data.refresh_token
        }
    } catch (error) {
        return {
            ...tokenObject,
            error: "RefreshAccessTokenError",
        }
    }
}

const providers = [
    CredentialsProvider({
        name: 'Credentials',
        authorize: async (credentials) => {
            try {
                const user = await axios.post(CONST.API_URL + 'auth/login', {
                    password: credentials.password,
                    login: credentials.email
                });

                console.log(user.data);

                if (user.data.access_token) {
                    return user;
                }

                return null;
            } catch (e) {
                throw new Error(e);
            }
        }
    })
]

const callbacks = {
    jwt: async ({ token, user }) => {
        if (user) {
            token.accessToken = user.data.access_token;
            token.expiresIn = parseInt(user.data.expires_in) * 1000 + Date.now();
            token.refreshToken = user.data.refresh_token;
            token.user = user.data.user;
        }

        const shouldRefreshTime = Math.round(token.expiresIn - Date.now());

        if (shouldRefreshTime > 0) {
            return Promise.resolve(token);
        }

        token = refreshAccessToken(token);
        return Promise.resolve(token);
    },
    session: async ({ session, token }) => {
        session.accessToken = token.accessToken;
        session.accessTokenExpiry = token.expiresIn;
        session.error = token.error;
        session.user = token.user;

        return Promise.resolve(session);
    },
}

export const options = {
    providers,
    callbacks,
    pages: {},
    secret: 'your_secret'
}

const Auth = (req, res) => NextAuth(req, res, options)
export default Auth;