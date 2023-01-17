import $api from "../index";
export default async function createTodo(data) {
    return $api.post(`todos`, JSON.stringify({
        id: data.id,
        title: data.title,
        repeat_each_day: data.repeat_each_day,
        date: (new Date()).toISOString(),
    })).then((response) => response.data);
}