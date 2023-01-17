import { createSlice } from '@reduxjs/toolkit'

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: [],
    },
    reducers: {
        setProjectsAction: (state, action) => {
            state.projects = action.payload;
        },
    }
})

export const { setProjectsAction } = projectsSlice.actions

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