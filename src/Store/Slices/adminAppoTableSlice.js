import { createSlice } from '@reduxjs/toolkit'

export const adminAppoTableSlice = createSlice({

    name: 'appolist',

    initialState: {

        appoTable: [],
        errorMessage: undefined
    },

    reducers: {

        showAppos: (state, action) => {

            state.appoTable = action.payload,
            state.errorMessage = undefined
        },

        showAppo : (state,action) => {

            state.appoTable = action.payload,
            state.errorMessage = undefined
        },

        deleteAppoReducer: (state, action) => {

            state.appoTable = action.payload,
            state.errorMessage = undefined
        },

        updateAppoReducer: (state, action) => {

            state.appoTable = action.payload,
            state.errorMessage = undefined
        }
    }
})

export const { showAppos, deleteAppoReducer, updateAppoReducer, showAppo } = adminAppoTableSlice.actions;
