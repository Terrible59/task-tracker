import $api from "../index";
export default async function createTodo(data) {
    const requestBody = {
        id: data.id,
        title: data.title,
        repeat_each_day: data.repeat_each_day ?? false,
        project_id: data.project_id,
        date: data.date,
    };

    if (!data.project_id) delete requestBody.project_id;

    return $api.post(`todos`, JSON.stringify(requestBody)).then((response) => response.data);
}