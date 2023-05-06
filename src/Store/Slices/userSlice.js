import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({

    name: 'user',

    initialState: {

        user: {},
        errorMessage: undefined
    },

    reducers: {

        onLogin: (state, action) => {
            
            state.user = action.payload,
            state.errorMessage = undefined
        },

        onLogout: (state,action) => {

            state.user = {};
            state.errorMessage = action.payload;
        },

        onRegister: (state,action) => {

            state.user = action.payload;
            state.errorMessage = undefined
        }
    }
})

export const { onLogin, onLogout, onRegister } = userSlice.actions;