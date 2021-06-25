import { createSlice } from '@reduxjs/toolkit';
import { getCategoriesFromApi } from './getCategoriesFromApi';

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
    },
    reducers: {
        getCategories: (state) => {
            // const list = getCategoriesFromApi();
            // state.categories.push(...list);
        }
    }
})

export const { getCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;