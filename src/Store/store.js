import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './Slices/userSlice';
import { adminUserTableSlice } from './Slices/adminUserTableSlice';
import { adminAppoTableSlice } from './Slices/adminAppoTableSlice';
import { patientAppoTableSlice } from './Slices/patientAppoTableSlice';

  
  export const store = configureStore({

    reducer: {

        user: userSlice.reducer,
        userList: adminUserTableSlice.reducer,
        appoList: adminAppoTableSlice.reducer,
        patAppoList: patientAppoTableSlice.reducer
    }

  });
