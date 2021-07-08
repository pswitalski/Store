import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        shoppingCartOpen: false,
        itemsInBasket: [],
    },
    reducers: {
        toggleShoppingCartModal: (state, action) => {
            console.log(action)
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
        manageItemsInBasket: (state, action) => {
            console.log(action.payload.payload);
            console.log(action.payload.type);
            switch(action.payload.type) {
                case 'ADD':
                    state.itemsInBasket = [...state.itemsInBasket, action.payload.payload];
                    break;
                default:
                    return;
            }
        }
    }
})

export const { toggleShoppingCartModal, manageItemsInBasket } = basketSlice.actions;

export default basketSlice.reducer;