import { createSlice } from '@reduxjs/toolkit'

export const patientAppoTableSlice = createSlice({

    name: 'patAppoList',

    initialState: {

        patAppoState: [],
        errorMessage: undefined
    },

    reducers: {

        createPatAppoReducer: (state, action) => {

            state.patAppoState = action.payload,
            state.errorMessage = undefined
        }
    }
})

export const { createPatAppoReducer } = patientAppoTableSlice.actions;

