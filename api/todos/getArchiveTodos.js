import $api from "../index";
export default async function getArchiveTodos() {
    return $api.get("todos/journal?page=1").then((response) => response.data);
}