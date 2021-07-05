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
        toggleUserProfileModal: (state, action) => {
            switch(action.type) {
                case 'OPEN':
                    state.userProfileModalOpen = true;
                    break;
                case 'CLOSE':
                    state.userProfileModalOpen = false;
                    break;
                default:
                    state.userProfileModalOpen = !state.userProfileModalOpen;
            }
        }
    }
})

export const { toggleUserProfileModal, toggleIsUserLogIn } = currentUserSlice.actions;

export default currentUserSlice.reducer;