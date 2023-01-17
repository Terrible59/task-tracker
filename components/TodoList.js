import React from "react";
import { useState, useEffect } from 'react';
import getTodos from "../api/todos/getTodos";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import {addNewTodoAction, setTodosAction} from "../redux/todosSlice";

export default function TodoList() {
    const data = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    console.log(data);

    useEffect(() => {
        const fetch = async () => {
            const res = await getTodos();
            dispatch(setTodosAction(res));
        };
        fetch();
    }, []);

    function handleNewBtnClick() {
        dispatch(addNewTodoAction());
    }

    return <div className="todo-list-wrapper">
        <div className="todo-heading-wrapper">
            <div className="todo-list__heading">Задачи</div>
            <div className="add-btn" onClick={handleNewBtnClick}></div>
        </div>
        <div className="todo-list">
            {data
                ? data?.map((item, i) => <Todo key={i} todo={item} />)
                : ""}
        </div>
    </div>
}