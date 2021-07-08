import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        shoppingCartOpen: false,
    },
    reducers: {
        toggleShoppingCartModal: (state, action) => {
            switch(action.type) {
                case 'OPEN':
                    state.shoppingCartOpen = true;
                    break;
                case 'CLOSE':
                    state.shoppingCartOpen = false;
                    break;
                default:
                    state.shoppingCartOpen = !state.shoppingCartOpen;
                    break;
            }
        },
    }
})

export const { toggleShoppingCartModal } = basketSlice.actions;

export default basketSlice.reducer;