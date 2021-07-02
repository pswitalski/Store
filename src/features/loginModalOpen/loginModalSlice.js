import { createSlice } from "@reduxjs/toolkit";

export const loginModalSlice = createSlice({
    name: 'loginModalOpen',
    initialState: {
        loginModalOpen: false
    },
    reducers: {
        openLoginModal: (state) => {
            state.loginModalOpen = true
        },
        closeLoginModal: (state) => {
            state.loginModalOpen = false
        },
        toggleLoginModal: (state) => {
            state.loginModalOpen = !state.loginModalOpen
        },
    }
});

export const { openLoginModal, closeLoginModal, toggleLoginModal } = loginModalSlice.actions;

export default loginModalSlice.reducer;