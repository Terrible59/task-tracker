import $api from "../index";
export default async function getProjects() {
    return $api.get("projects/getProjectsByMaster").then((response) => response.data);
}