import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
    name: 'Currency',
    initialState: {
        currencyModalOpen: false,
        currentCurrency: 'usd',
        exchangeRate: {}
    },
    reducers: {
        toggleCurrencyModal: (state, action) => {
            switch (action.type) {
                case 'OPEN':
                    state.currencyModalOpen = true;
                    break;
                case 'CLOSE':
                    state.currencyModalOpen = false;
                    break;
                default:
                    state.currencyModalOpen = !state.currencyModalOpen;
                    break;
            }
        },
        addExchangeRate: (state, action) => {
            state.exchangeRate = action.payload;
        },
        switchCurrency: (state, action) => {
            state.currentCurrency = action.payload;
        }
    }
});

export const { toggleCurrencyModal, addExchangeRate, switchCurrency } = currencySlice.actions;

export default currencySlice.reducer;