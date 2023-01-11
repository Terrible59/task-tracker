import axios from "axios";
import { CONST } from "../constants";
import { getSession } from "next-auth/react";

const $api = axios.create({
    baseURL: CONST.API_URL,
});

$api.interceptors.request.use(async (config) => {
    const session = await getSession();
    config.headers.Authorization = `Bearer ${session.accessToken}`;
    config.headers = {
        ...config.headers,
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    };

    return config;
});

export default $api;