'use client';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addNewTodoAction, selectors, setTodosAction} from "../../../../redux/todosSlice";
import TodoList from "../../../../components/TodoList";
import hexToRGB from "../../../../utils/hexToRgba";
import {projectSelectors, setProjectsAction} from "../../../../redux/projectsSlice";
import getProjects from "../../../../api/projects/getProjects";
import getTodos from "../../../../api/todos/getTodos";

export default function ProjectPage({ params }) {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetch = async () => {
            const projects = await getProjects();
            const todos = await getTodos();
            dispatch(setProjectsAction(projects));
            dispatch(setTodosAction(todos));
        };
        fetch();
    }, []);

    const todos = useSelector(state => selectors.todosByProject(state, params.id));
    const project = useSelector(state => projectSelectors.getById(state, params.id));
    const doneCount = useSelector(state => selectors.doneTodosCountByProject(state, project?.id));
    const todosCount = useSelector(state => selectors.todosCountByProject(state, project?.id));

    function handleNewBtnClick() {
        dispatch(addNewTodoAction({project_id: project.id}));
    }

    if (!project) {
        return <div></div>;
    }

    return (
        <div className="project-page">
            <div className="project-item project-item_page">
                <div className="project-item-info" style={{background: "linear-gradient(135deg, " + hexToRGB(project.color) + " 0%, " + hexToRGB(project.color, 0.6) + " 100%)"}}>
                    <i className="material-icons project-item__icon">{project.icon}</i>
                    <div className="project-item__tasks">{doneCount}/{todosCount}</div>
                </div>
                <div className="project-item__title">{project.title}</div>
            </div>
            <div className="project-todos">
                <div className="todo-heading-wrapper">
                    <div className="todo-list__heading">Задачи</div>
                    <div className="add-btn" onClick={handleNewBtnClick}></div>
                </div>
                <TodoList todos={todos} />
            </div>
        </div>
    );
}