import $api from "../index";
export default async function changeProject(data) {
    return $api.put(`projects/${data.id}`, JSON.stringify({
        title: data.title,
        color: data.color,
        icon: data.icon,
        change_date: (new Date()).toISOString(),
    })).then((response) => response.data);
}