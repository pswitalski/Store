import { configureStore, } from '@reduxjs/toolkit';
import categoriesReducer from 'features/categories/categoriesSlice';
import navOpenReducer from 'features/navOpen/navOpenSlice';
import itemsReducer from 'features/items/itemsSlice';
import newsletterSubscribeReducer from 'features/newsletterSubscribe/newsletterSubscribeSlice';
import loginModalOpenReducer from 'features/loginModalOpen/loginModalSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    navOpen: navOpenReducer,
    items: itemsReducer,
    newsletterSubscribe: newsletterSubscribeReducer,
    loginModalOpen: loginModalOpenReducer,
  }
});
