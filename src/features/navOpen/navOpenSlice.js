import { createSlice } from "@reduxjs/toolkit";

export const navOpenSlice = createSlice({
    name: 'navOpen',
    initialState: {
        navOpen: false
    },
    reducers: {
        open: (state) => {
            state.navOpen = true
        },
        close: (state) => {
            state.navOpen = false
        }
    }
});

export const { open, close } = navOpenSlice.actions;

export default navOpenSlice.reducer;