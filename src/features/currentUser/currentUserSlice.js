import { createSlice } from '@reduxjs/toolkit';

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: {
        userProfileModalOpen: false,
        isUserLogIn: false
    },
    reducers: {
        toggleIsUserLogIn: (state, action) => {
            state.isUserLogIn = action.payload;
        },
        toggleUserProfileModal: (state) => {
            state.userProfileModalOpen = !state.userProfileModalOpen;
        },
        openUserProfileModal: (state) => {
            state.userProfileModalOpen = true;
        },
        closeUserProfileModal: (state) => {
            state.userProfileModalOpen = false;
        }
    }
})

export const { toggleUserProfileModal, toggleIsUserLogIn, openUserProfileModal, closeUserProfileModal } = currentUserSlice.actions;

export default currentUserSlice.reducer;