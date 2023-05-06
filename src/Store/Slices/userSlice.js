import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({

    name: 'user',

    initialState: {

        user: {},
        status: 'not-authenticated',
        errorMessage: undefined
    },

    reducers: {

        onLogin: (state, action) => {
            
            console.log('estamos en onLogin')

            state.user = action.payload;
            state.status = 'authenticated';
            state.errorMessage = undefined;
        }
    },

    onLogout: (state,action) => {

        state.user = {};
        state.status = 'not-authenticated';
        state.errorMessage = action.payload;
    }
})

export const { onLogin, onLogout } = userSlice.actions;