import React from "react";
import Todo from "./Todo";

export default function TodoList({todos}) {
    return (
        <div className="todo-list">
            {todos
                ? todos?.map((item, i) => <Todo key={i} todo={item} />)
                : ""}
        </div>
    );
}