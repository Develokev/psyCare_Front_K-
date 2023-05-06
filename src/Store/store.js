import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './Slices/userSlice';
import { adminSlice } from './Slices/adminSlice';
import { setLocal } from '../Helpers/localStorage';
  
  const store = configureStore({

    reducer: {

        users: userSlice.reducer,
    },

  });
  
  export default store;

store.subscribe(() => setLocal(store.getState()));
