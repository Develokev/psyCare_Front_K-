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

        deleteAppoReducer: (state, action) => {

            state.appoTable = action.payload,
            state.errorMessage = undefined
        },

        updateAppoReducer: (state, action) => {

            console.log('esto es action en slice', action)
            state.appoTable = action.payload,
            state.errorMessage = undefined
        }
    }
})

export const { showAppos, deleteAppoReducer, updateAppoReducer } = adminAppoTableSlice.actions;
