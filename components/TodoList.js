import React from "react";
import { useState, useEffect } from 'react';
import getTodos from "../api/todos/getTodos";
import Todo from "./Todo";

export default function TodoList() {
    const [data, setData] = useState("");
    useEffect(() => {
        const fetch = async () => {
            const res = await getTodos();
            console.log(res)
            setData(res);
        };
        fetch();
    }, []);
    return <div className="todo-list">
        {data
            ? data?.map((item, i) => <Todo key={i} props={item} />)
            : ""}
    </div>
}