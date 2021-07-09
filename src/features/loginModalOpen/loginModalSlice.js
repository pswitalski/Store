import { createSlice } from "@reduxjs/toolkit";

export const loginModalSlice = createSlice({
    name: 'loginModalOpen',
    initialState: {
        loginModalOpen: false
    },
    reducers: {
        toggleLoginModal: (state) => {
            state.loginModalOpen = !state.loginModalOpen;
        },
        openLoginModal: (state) => {
            state.loginModalOpen = true;
        },
        closeLoginModal: (state) => {
            state.loginModalOpen = false;
        }
    }
});

export const { toggleLoginModal, openLoginModal, closeLoginModal } = loginModalSlice.actions;

export default loginModalSlice.reducer;