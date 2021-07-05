import { createSlice } from "@reduxjs/toolkit";

export const loginModalSlice = createSlice({
    name: 'loginModalOpen',
    initialState: {
        loginModalOpen: false
    },
    reducers: {
        toggleLoginModal: (state, action) => {
            switch (action.type) {
                case 'OPEN':
                    state.loginModalOpen = true;
                    break;
                case 'CLOSE':
                    state.loginModalOpen = false;
                    break;
                default:
                    state.loginModalOpen = !state.loginModalOpen;
                    break;
            }
        },
    }
});

export const { toggleLoginModal } = loginModalSlice.actions;

export default loginModalSlice.reducer;