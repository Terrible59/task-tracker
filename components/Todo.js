import React from "react";
import Image from 'next/image';
import check from '../public/check-white.svg';
import changeTodo from "../api/todos/changeTodo";
import {useDispatch} from "react-redux";
import {checkTodoAction, changeTodoAction} from "../redux/todosSlice";
import createTodo from "../api/todos/createTodo";

export default function Todo({ todo }) {
    const dispatch = useDispatch();
    async function handleDoneClick() {
        if (todo.isNew) return;
        const changedTodo = {...todo};
        changedTodo.done = !todo.done;
        dispatch(checkTodoAction(todo));
    }

    function handleTitleChange(event) {
        const changedTodo = {...todo};
        changedTodo.title = event.target.value;
        dispatch(changeTodoAction(changedTodo));
    }

    async function handleKeyDown(event) {
        if (event.key === 'Enter') {
            event.target.blur();
        }
    }

    async function handleBlur() {
        if (todo.isNew) {
            await createTodo(todo);
            const changedTodo = {...todo};
            changedTodo.isNew = false;
            dispatch(changeTodoAction(changedTodo));
            return;
        }

        await changeTodo(todo);
    }

    return <div className={"todo" + (todo.done ? " todo_done" : "")}>
        <div className="todo-check" onClick={handleDoneClick}><Image src={check} alt="check" className="todo-check__img"/></div>
        {todo.journal ?
            <div className="todo-title">{todo?.title}</div>
            :
            <input className="todo-title" value={todo?.title} onChange={handleTitleChange} onKeyDown={handleKeyDown} onBlur={handleBlur} />
        }
    </div>
}