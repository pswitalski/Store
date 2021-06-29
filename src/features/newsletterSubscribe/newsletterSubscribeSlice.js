import { createSlice } from "@reduxjs/toolkit";

export const newsletterSubscribeSlice = createSlice({
    name: 'newsletterSubscribe',
    initialState: {
        newsletterSubscribe: false
    },
    reducers: {
        subscribe: (state) => {
            state.newsletterSubscribe = true
        }
    }
});

export const { subscribe } = newsletterSubscribeSlice.actions;

export default newsletterSubscribeSlice.reducer;