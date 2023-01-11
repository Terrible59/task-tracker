import axios from 'axios';
import { CONST } from "../../constants";
import { getSession } from "next-auth/react";

export default async function getTodos() {
    const session = await getSession();
    const res = await axios.get(CONST.API_URL + 'todos', {
        headers: {
            Authorization: `Bearer ${session.accessToken}`
        }
    });
    return res.data;
}