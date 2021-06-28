import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: {
            electronics: [],
            jewelery: [],
            mensClothing: [],
            womensClothing: []
        },
    },
    reducers: {
        addElectronics: (state, action) => {
            state.items.electronics = [...action.payload];
        },
        addJewelery: (state, action) => {
            state.items.jewelery = [...action.payload];
        },
        addMensClothing: (state, action) => {
            state.items.mensClothing = [...action.payload];
        },
        addWomensClothing: (state, action) => {
            state.items.womensClothing = [...action.payload];
        },
    }
})

export const { addElectronics, addJewelery, addMensClothing, addWomensClothing } = itemsSlice.actions;

export default itemsSlice.reducer;