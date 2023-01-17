import { createSlice } from '@reduxjs/toolkit'
import changeTodo from "../api/todos/changeTodo";

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
        addNewTodoAction: (state) => {
            state.todos.push({
                id: self.crypto.randomUUID(),
                title: "",
                done: false,
                journal: false,
                isNew: true,
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
    }
}