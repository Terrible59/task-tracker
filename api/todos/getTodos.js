import $api from "../index";
export default async function getTodos() {
    return $api.get("todos").then((response) => response.data);
}