import { createSlice } from '@reduxjs/toolkit';

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: {
        userData: {},
        isUserLogIn: false
    },
    reducers: {
        addCurrentUser: (state, action) => {
            state.userData = action.payload;
        },
        toggleIsUserLogIn: (state, action) => {
            state.isUserLogIn = !state.isUserLogIn;
        }
    }
})

export const { addCurrentUser, toggleIsUserLogIn } = currentUserSlice.actions;

export default currentUserSlice.reducer;