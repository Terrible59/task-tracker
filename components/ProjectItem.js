import React from "react";
import hexToRGB from '../utils/hexToRgba';
import {useSelector} from "react-redux";
import {selectors} from "../redux/todosSlice";
export default function ProjectItem({project}) {
    const doneCount = useSelector(state => selectors.doneTodosCountByProject(state, project.id));
    const todosCount = useSelector(state => selectors.todosCountByProject(state, project.id));

    return (
        <div className="project-item">
            <div className="project-item-info" style={{background: "linear-gradient(135deg, " + hexToRGB(project.color) + " 0%, " + hexToRGB(project.color, 0.6) + " 100%)"}}>
                <i className="material-icons project-item__icon">{project.icon}</i>
                <div className="project-item__tasks">{doneCount}/{todosCount}</div>
            </div>
            <div className="project-item__title">{project.title}</div>
        </div>
    );
}