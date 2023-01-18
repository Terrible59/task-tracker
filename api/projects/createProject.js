import $api from "../index";
export default async function createProject(data) {
    return $api.post(`projects`, JSON.stringify({
        id: data.id,
        title: data.title,
        color: data.color,
        icon: data.icon,
    })).then((response) => response.data);
}