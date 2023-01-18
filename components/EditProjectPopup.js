import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import hexToRGB from "../utils/hexToRgba";
import {useDispatch} from "react-redux";
import {changeProjectAction, deleteProjectAction} from "../redux/projectsSlice";
import ColorPicker from "./ColorPicker";
import changeProject from "../api/projects/changeProject";
import createProject from "../api/projects/createProject";
import deleteProject from "../api/projects/deleteProject";
import {useRouter} from "next/navigation";
export default function EditProjectPopup({show, onHide, project}) {
    const dispatch = useDispatch();
    const router = useRouter();
    function handleChange(event) {
        const changedProject = {...project};
        changedProject.title = event.target.value;
        dispatch(changeProjectAction(changedProject));
    }

    async function saveProject() {
        onHide();
        if (project.isNew) {
            await createProject(project);
            const changedProject = {...project};
            changedProject.isNew = false;
            dispatch(changeProjectAction(changedProject));
            return;
        }
        await changeProject(project);
    }

    async function removeProject() {
        if (!project.isNew) await deleteProject(project);
        dispatch(deleteProjectAction(project));
        router.push('/application');
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Редактирование проекта
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="project-item project-item_edit">
                    <div className="project-item-info" style={{background: "linear-gradient(135deg, " + hexToRGB(project.color) + " 0%, " + hexToRGB(project.color, 0.6) + " 100%)"}}>
                        <i className="material-icons project-item__icon">{project.icon}</i>
                        <div className="project-item__tasks"><i className="material-icons" style={{fontSize: "12px"}}>edit</i></div>
                    </div>
                    <input className="project-item__title" value={project.title} onChange={handleChange} />
                </div>
                <ColorPicker project={project}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={removeProject}>Удалить</Button>
                <Button variant="primary" onClick={saveProject}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    );
}