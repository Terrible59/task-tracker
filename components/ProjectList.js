import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import getProjects from "../api/projects/getProjects";
import {addNewProjectAction, setProjectsAction} from "../redux/projectsSlice";
import ProjectItem from "./ProjectItem";
import EditProjectPopup from "./EditProjectPopup";


export default function ProjectList() {
    const [newProject, setNewProject] = useState(null);

    const [show, setShow] = useState(true);
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

    const data = useSelector(state => state.projects.projects);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetch = async () => {
            const res = await getProjects();
            dispatch(setProjectsAction(res));
        };
        fetch();
    }, []);

    function addNewProject() {
        dispatch(addNewProjectAction());
    }

    return (
        <div className="project-list">
            {data
                ? data?.map((item, i) => <ProjectItem key={i} project={item} />)
                : ""}
            <div className="project-item project-item_add" onClick={addNewProject}>
                <div className="project-item-info">
                    <div className="add-btn add-btn_project"></div>
                </div>
                <div className="project-item__title">Новый проект</div>
            </div>
            {data.find(el => el.isNew) ? <EditProjectPopup project={data.find(el => el.isNew)} show={show} onHide={handleClose} /> : null}
        </div>
    );
}