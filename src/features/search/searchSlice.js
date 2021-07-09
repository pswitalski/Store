import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchModalOpen: false
    },
    reducers: {
        toggleSearchModalOpen: (state) => {
            state.searchModalOpen = !state.searchModalOpen;
        },
        openSearchModalOpen: (state) => {
            state.searchModalOpen = true;
        },
        closeSearchModalOpen: (state) => {
            state.searchModalOpen = false;
        }
    }
});

export const { toggleSearchModalOpen, openSearchModalOpen, closeSearchModalOpen } = searchSlice.actions;

export default searchSlice.reducer;