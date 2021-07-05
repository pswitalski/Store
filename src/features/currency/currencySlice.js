import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
    name: 'Currency',
    initialState: {
        currencyModalOpen: false,
        currentCurrency: 'usd',
        exchangeRates: {}
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
        addExchangeRates: (state, action) => {
            state.exchangeRates = action.payload;
        },
        switchCurrency: (state, action) => {
            state.currentCurrency = action.payload;
        }
    }
});

export const { toggleCurrencyModal, addExchangeRates, switchCurrency } = currencySlice.actions;

export default currencySlice.reducer;