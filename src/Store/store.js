import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './Slices/userSlice';
import { adminUserTableSlice } from './Slices/adminUserTableSlice';

  
  export const store = configureStore({

    reducer: {

        user: userSlice.reducer,
        userList: adminUserTableSlice.reducer
    }

  });
