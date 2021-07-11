import { createSlice } from "@reduxjs/toolkit";

export const addedToCartSlice = createSlice({
    name: 'addedToCartSlice',
    initialState: {
        modalOpen: false,
        addedItem: {}
    },
    reducers: {
        openAddedModal: (state) => {
            state.modalOpen = true;
        },
        closeAddedModal: (state) => {
            state.modalOpen = false;
        },
        addLastAddedItem: (state, action) => {
            state.addedItem = action.payload.payload;
        },
        removeLastAddedItem: (state) => {
            state.addedItem = {};
        }
    }
});

export const { openAddedModal, closeAddedModal, addLastAddedItem, removeLastAddedItem } = addedToCartSlice.actions;

export default addedToCartSlice.reducer;