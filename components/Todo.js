import React from "react";
import Image from 'next/image';
import check from '../assets/images/check-white.svg';

export default function Todo({props}) {
    console.log(props);
    return <div className={"todo" + (props.done ? " todo_done" : "")}>
        <div className="todo-check"><Image src={check} alt="check" className="todo-check__img"/></div>
        <div className="todo-title">{props.title}</div>
    </div>
}