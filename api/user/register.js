import axios from "axios";
import {CONST} from "../../constants";
export default async function register(data) {
    return axios.post(CONST.API_URL + `auth/register`, {
        "email": data.email,
        "login": data.login,
        "password": data.password,
        "fcm_token": self.crypto.randomUUID(),
        "language": 'ru',
    }).then((response) => response.data);
}