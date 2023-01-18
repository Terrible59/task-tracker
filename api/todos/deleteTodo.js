import $api from "../index";
export default async function deleteTodo(data) {
    return $api.delete(`todos/${data.id}`).then((response) => response.data);
}