import { createSlice } from '@reduxjs/toolkit'
import {CONST} from "../constants";

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: [],
    },
    reducers: {
        setProjectsAction: (state, action) => {
            state.projects = action.payload;
        },
        changeProjectAction: (state, action) => {
            const projectIndex = state.projects.findIndex((el) => el.id === action.payload.id);
            state.projects[projectIndex] = action.payload;
        },
        addNewProjectAction: (state) => {
            state.projects.push({
                id: self.crypto.randomUUID(),
                title: "Проект",
                icon: "book",
                color: CONST.PROJECT_COLORS[0],
                isNew: true,
            });
        },
        deleteProjectAction: (state, action) => {
            state.projects = state.projects.filter(el => el.id !== action.payload.id);
        }
    }
})

export const { setProjectsAction, changeProjectAction, addNewProjectAction, deleteProjectAction } = projectsSlice.actions

export default projectsSlice.reducer

export const projectSelectors = {
    getColorById: (state, id) => {
        try {
            const res = state.projects.projects.find(el => el.id === id).color;
            return res;
        } catch (e) {}
    },
    getById: (state, id) => {
        return state.projects.projects.find(el => el.id === id);
    }
}