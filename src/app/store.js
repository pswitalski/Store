import { configureStore, } from '@reduxjs/toolkit';
import categoriesReducer from 'features/categories/categoriesSlice';
import navOpenReducer from 'features/navOpen/navOpenSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    navOpen: navOpenReducer
  }
});
