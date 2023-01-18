import React from "react";
import {CONST} from "../constants";
import {useDispatch} from "react-redux";
import {changeProjectAction} from "../redux/projectsSlice";
export default function IconPicker({show, project}) {
    const dispatch = useDispatch();
    function handleClick(event) {
        const changedProject = {...project};
        changedProject.icon = event.target.innerHTML;
        dispatch(changeProjectAction(changedProject));
    }

    return (
        <div className={"icon-picker" + ( show ? ' icon-picker_show' : '' )}>
            {
                CONST.MATERIAL_ICONS.map((icon, i) => {
                    return (
                        <div className="icon-picker__item" >
                            <i className="material-icons" style={{color: "#000"}} onClick={handleClick}>{icon}</i>
                        </div>
                    );
                })
            }
        </div>
    );
}