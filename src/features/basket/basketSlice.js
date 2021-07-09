import { createSlice, current } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        shoppingCartOpen: false,
        itemsInBasket: [],
        total: 0,
        currencySymbol: '$',
        quantityOfItems: 0
    },
    reducers: {
        toggleShoppingCartModal: (state, action) => {
            state.shoppingCartOpen = !state.shoppingCartOpen;
        },
        openShoppingCardModal: (state) => {
            state.shoppingCartOpen = true;
        },
        closeShoppingCartModal: (state) => {
            state.shoppingCartOpen = false;
        },
        manageItemsInBasket: (state, action) => {
            console.log(action.payload.payload);
            console.log(action.payload.type);
            const currentState = current(state.itemsInBasket);
            switch(action.payload.type) {
                case 'ADD':
                    const id = action.payload.payload.id;
                    const index = currentState.findIndex((item) => {
                        if (item.product.id === id) {
                            return true;
                        }
                    })

                    if (index === -1) {
                        state.itemsInBasket = [...state.itemsInBasket, {quantity: 1, product: action.payload.payload}];
                    } else {
                        const currentQuantity = currentState[index].quantity;
                        const currentProduct = currentState[index].product;
                        const clonedState = [...currentState];
                        clonedState.splice(index, 1, {quantity: currentQuantity + 1, product: currentProduct})
                        state.itemsInBasket = clonedState
                    }
                    break;
                case 'DELETE':
                    const targetId = action.payload.payload.id;
                    const newState = current(state.itemsInBasket).filter(item => {
                        if (item.product.id !== targetId) return true;
                    });
                    state.itemsInBasket = newState;
                    break;
                case 'INCREMENT':
                    const incrementId = action.payload.payload.id;
                    const incrementIndex = currentState.findIndex((item) => {
                        if (item.product.id === incrementId) {
                            return true;
                        }
                    })
                    const incrementProduct = currentState[incrementIndex].product;
                    const incrementQuantity = currentState[incrementIndex].quantity;
                    const clonedIncrementState = [...currentState];
                    clonedIncrementState.splice(incrementIndex, 1, {quantity: incrementQuantity + 1, product: incrementProduct});
                    state.itemsInBasket = clonedIncrementState;
                    break;
                case 'DECREMENT':
                    console.log('-');

                    const decrementId = action.payload.payload.id;
                    const decrementIndex = currentState.findIndex((item) => {
                        if (item.product.id === decrementId) {
                            return true;
                        }
                    });

                    const decrementProduct = currentState[decrementIndex].product;
                    const decrementQuantity = currentState[decrementIndex].quantity;
                    const clonedDecrementState= [...currentState];
                    clonedDecrementState.splice(decrementIndex, 1, {quantity: decrementQuantity - 1, product: decrementProduct})
                    state.itemsInBasket = clonedDecrementState;
                    break;
                default:
                    return;
            }
        },
        sumBasketValue: (state) => {
            const currentBasket = current(state.itemsInBasket);
            const values = [];
            const quantities = [];
            currentBasket.forEach(item => {
                const multiplyer = item.quantity;
                const price = item.product.price;
                const value = multiplyer * price;
                values.push(value);
                quantities.push(multiplyer)
            })

            let sum = 0;

            values.forEach(item => {
                sum = sum + item;
            })

            console.log(quantities)

            let totalQuantity = 0;

            if (quantities.length > 0) {
                totalQuantity = quantities.reduce((acc, current) => {
                    return acc + current;
                })
            }

            state.total = sum;
            state.quantityOfItems = totalQuantity;
        },
        changeCurrencySymbol: (state, action) => {
            console.log(action.payload)

            switch(action.payload) {
                case 'pln':
                    state.currencySymbol = 'PLN';
                    break;
                case 'gbp':
                    state.currencySymbol = '£';
                    break;
                case 'eur':
                    state.currencySymbol = '€';
                    break;
                default:
                    state.currencySymbol = '$';
                    break;
            }
        }
    }
})

export const { toggleShoppingCartModal, openShoppingCardModal, closeShoppingCartModal, manageItemsInBasket, sumBasketValue, changeCurrencySymbol } = basketSlice.actions;

export default basketSlice.reducer;