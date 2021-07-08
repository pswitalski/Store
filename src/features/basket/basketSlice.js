import { createSlice, current } from '@reduxjs/toolkit';

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
                    const id = action.payload.payload.id;
                    const currentState = current(state.itemsInBasket);
                    const index = currentState.findIndex((item) => {
                        if (item.product.id === id) {
                            return true;
                        }
                    })

                    if (index === -1) {
                        state.itemsInBasket = [...state.itemsInBasket, {quantity: 1, product: action.payload.payload}];
                    } else {
                        const currentQuantity = currentState[index].quantity;
                        const newState = currentState.filter(item => {
                           if (item.product.id !== id) return true;
                        })
                        state.itemsInBasket = [...newState, {quantity: currentQuantity + 1, product: action.payload.payload}]
                    }
                    break;
                case 'DELETE':
                    const targetId = action.payload.payload.id;
                    const newState = current(state.itemsInBasket).filter(item =>{
                        if (item.product.id !== targetId) return true;
                    });
                    state.itemsInBasket = newState;
                    break;
                default:
                    return;
            }
        }
    }
})

export const { toggleShoppingCartModal, manageItemsInBasket } = basketSlice.actions;

export default basketSlice.reducer;