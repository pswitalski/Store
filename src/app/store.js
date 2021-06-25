import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import categoriesReducer from 'features/categories/categoriesSlice';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer
  }
}, applyMiddleware(thunk));
