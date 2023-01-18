import React from "react";
import { CONST } from "../constants";
import check from "../public/check-white.svg";
import Image from "next/image";
import {useDispatch} from "react-redux";
import {changeProjectAction} from "../redux/projectsSlice";

export default function ColorPicker({project}) {
    const dispatch = useDispatch();
    function handleClick(event) {
        const changedProject = {...project};
        changedProject.color = event.target.attributes["data-value"].value;
        dispatch(changeProjectAction(changedProject));
    }
    function getColors() {
        let content = [];
        for (let item of CONST.PROJECT_COLORS) {
            content.push(
                <div onClick={handleClick} key={item} className="color-picker__item" data-value={item} style={{backgroundColor: item}}>
                    {project.color === item ? <Image src={check} alt="check" className="color-picker__img"/> : null}
                </div>
            );
        }
        return content;
    }

    return (
        <div className="color-picker">
            {getColors()}
        </div>
    );
}