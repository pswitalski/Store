import { configureStore, } from '@reduxjs/toolkit';
import categoriesReducer from 'features/categories/categoriesSlice';
import navOpenReducer from 'features/navOpen/navOpenSlice';
import itemsReducer from 'features/items/itemsSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    navOpen: navOpenReducer,
    items: itemsReducer
  }
});
