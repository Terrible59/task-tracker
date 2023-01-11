import React from "react";

export default function Todo({props}) {
    console.log(props);
    return <div className={"todo" + (props.done ? " todo_done" : "")}>
        <div className="todo-check"></div>
        <div className="todo-title">{props.title}</div>
    </div>
}