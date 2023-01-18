import $api from "../index";
export default async function deleteProject(data) {
    return $api.delete(`projects/${data.id}`).then((response) => response.data);
}