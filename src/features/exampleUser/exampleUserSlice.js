import { createSlice } from '@reduxjs/toolkit';

export const exampleUserSlice = createSlice({
    name: 'exampleUser',
    initialState: {
        exampleUser: {},
    },
    reducers: {
        addExampleUser: (state, action) => {
            state.exampleUser = action.payload;
        },
    }
})

export const { addExampleUser } = exampleUserSlice.actions;

export default exampleUserSlice.reducer;