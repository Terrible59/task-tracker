import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import getProjects from "../api/projects/getProjects";
import {setProjectsAction} from "../redux/projectsSlice";
import ProjectItem from "./ProjectItem";


export default function ProjectList() {
    const data = useSelector(state => state.projects.projects);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetch = async () => {
            const res = await getProjects();
            dispatch(setProjectsAction(res));
        };
        fetch();
    }, []);

    return (
        <div className="project-list">
            {data
                ? data?.map((item, i) => <ProjectItem key={i} project={item} />)
                : ""}
        </div>
    );
}