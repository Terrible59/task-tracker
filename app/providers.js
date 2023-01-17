'use client';
import { useState } from 'react';
import {SessionProvider} from "next-auth/react";
import RefreshTokenHandler from "../components/refreshTokenHandler";
import store from '../redux/store';
import { Provider } from 'react-redux';

export default function Providers({ children, session }) {
    const [interval, setInterval] = useState(0);
    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                {children}
                <RefreshTokenHandler setInterval={setInterval} />
            </Provider>
        </SessionProvider>
    );
}
