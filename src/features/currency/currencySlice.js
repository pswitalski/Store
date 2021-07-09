import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
    name: 'Currency',
    initialState: {
        currencyModalOpen: false,
        currentCurrency: 'usd',
        exchangeRate: {}
    },
    reducers: {
        toggleCurrencyModal: (state) => {
            state.currencyModalOpen = !state.currencyModalOpen;
        },
        openCurrencyModal: (state) => {
            state.currencyModalOpen = true;
        },
        closeCurrencyModal: (state) => {
            state.currencyModalOpen = false;
        },
        addExchangeRate: (state, action) => {
            state.exchangeRate = action.payload;
        },
        switchCurrency: (state, action) => {
            state.currentCurrency = action.payload;
        }
    }
});

export const { toggleCurrencyModal, addExchangeRate, switchCurrency, openCurrencyModal, closeCurrencyModal } = currencySlice.actions;

export default currencySlice.reducer;