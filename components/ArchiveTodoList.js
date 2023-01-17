import React from "react";
import { useState, useEffect } from 'react';
import Todo from "./Todo";
import getArchiveTodos from "../api/todos/getArchiveTodos";
import {useDispatch, useSelector} from "react-redux";
import {setArchiveTodosAction} from "../redux/todosSlice";

export default function ArchiveTodoList() {
    const data = useSelector(state => state.todos.archiveTodos);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetch = async () => {
            const res = await getArchiveTodos();
            dispatch(setArchiveTodosAction(res.data));
        };
        fetch();
    }, []);
    return <div className="todo-list-wrapper">
        <div className="todo-list__heading">Архив задач</div>
        <div className="todo-list">
            {data
                ? data?.map((item, i) => <Todo key={i} todo={item}/>)
                : ""}
        </div>
    </div>
}