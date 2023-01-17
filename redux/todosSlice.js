import { createSlice } from '@reduxjs/toolkit'
import changeTodo from "../api/todos/changeTodo";

import isToday from '../utils/isToday';
import isTomorrow from "../utils/isTomorrow";
import isLater from "../utils/isLater";

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        archiveTodos: [],
    },
    reducers: {
        setTodosAction: (state, action) => {
            state.todos = action.payload;
        },
        setArchiveTodosAction: (state, action) => {
            state.archiveTodos = action.payload;
        },
        checkTodoAction: (state, action) => {
            const todoIndex = state.todos.findIndex((el) => el.id === action.payload.id);
            state.todos[todoIndex].done = !state.todos[todoIndex].done;
            changeTodo(state.todos[todoIndex]);
        },
        changeTodoAction: (state, action) => {
            const todoIndex = state.todos.findIndex((el) => el.id === action.payload.id);
            state.todos[todoIndex] = action.payload;
        },
        addNewTodoAction: (state, action) => {
            let date = new Date();

            if (action && action.payload.days) {
                date.setDate(date.getDate() + action.payload.days);
            }

            state.todos.push({
                id: self.crypto.randomUUID(),
                title: "",
                done: false,
                journal: false,
                isNew: true,
                project_id: action?.payload.project_id ? action.payload.project_id : null,
                date: date.toISOString(),
            });
        }
    }
})

export const { setTodosAction, checkTodoAction, changeTodoAction, setArchiveTodosAction, addNewTodoAction } = todosSlice.actions

export default todosSlice.reducer

export const selectors = {
    doneTodosCountByProject: function(state, projectId) {
        return state.todos.todos.reduce((res, todo) => {
            if (todo.project_id === projectId && todo.done) return res += 1;
            return res;
        }, 0);
    },
    todosCountByProject: function(state, projectId) {
        return state.todos.todos.reduce((res, todo) => {
            if (todo.project_id === projectId) return res += 1;
            return res;
        }, 0);
    },
    todosByProject: function(state, projectId) {
        return state.todos.todos.filter((todo) => {
            if (todo.project_id === projectId) return todo;
        });
    },
    todayTodos: function (state) {
        return state.todos.todos.filter((todo) => {
            return isToday(new Date(todo.date));
        });
    },
    tomorrowTodos: function (state) {
        return state.todos.todos.filter((todo) => {
            return isTomorrow(new Date(todo.date));
        });
    },
    laterTodos: function (state) {
        return state.todos.todos.filter((todo) => {
            return isLater(new Date(todo.date));
        });
    }
}