import { configureStore } from '@reduxjs/toolkit'
import todosReducer from "./todosSlice";
import projectsReducer from "./projectsSlice";

export default configureStore({
    reducer: {
        todos: todosReducer,
        projects: projectsReducer,
    }
})