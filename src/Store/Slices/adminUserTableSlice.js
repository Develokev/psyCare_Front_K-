import { createSlice } from '@reduxjs/toolkit'

export const adminUserTableSlice = createSlice({

    name: 'userList',

    initialState: {

        userTable: [],
        errorMessage: undefined
    },

    reducers: {

        showUsers: (state, action) => {
            console.log({action})
            state.userTable = action.payload,
            state.errorMessage = undefined
        }
    }
})

export const {showUsers} = adminUserTableSlice.actions;
