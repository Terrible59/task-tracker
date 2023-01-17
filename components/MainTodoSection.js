import React from "react";
import { useEffect } from 'react';
import getTodos from "../api/todos/getTodos";
import { useDispatch, useSelector } from "react-redux";
import {addNewTodoAction, selectors, setTodosAction} from "../redux/todosSlice";
import TodoList from "./TodoList";

export default function MainTodoSection() {
    const dispatch = useDispatch();

    const today = useSelector(selectors.todayTodos);
    const tomorrow = useSelector(selectors.tomorrowTodos);
    const later = useSelector(selectors.laterTodos);

    useEffect(() => {
        const fetch = async () => {
            const res = await getTodos();
            dispatch(setTodosAction(res));
        };
        fetch();
    }, []);

    function handleNewBtnClick(days, event) {
        dispatch(addNewTodoAction({days: days}));
    }

    return <div className="todo-list-wrapper">
        <div className="todo-lists-wrapper">
            <div className="todo-list-card">
                <div className="todo-heading-wrapper">
                    <div className="todo-list__heading">Сегодня</div>
                    <div className="add-btn" onClick={handleNewBtnClick.bind(null, 0)}></div>
                </div>
                <TodoList todos={today} />
            </div>
            <div className="todo-list-card">
                <div className="todo-heading-wrapper">
                    <div className="todo-list__heading">Завтра</div>
                    <div className="add-btn" onClick={handleNewBtnClick.bind(null, 1)}></div>
                </div>
                <TodoList todos={tomorrow} />
            </div>
            <div className="todo-list-card">
                <div className="todo-heading-wrapper">
                    <div className="todo-list__heading">Позже</div>
                    <div className="add-btn" onClick={handleNewBtnClick.bind(null, 2)}></div>
                </div>
                <TodoList todos={later} />
            </div>
        </div>
    </div>
}