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