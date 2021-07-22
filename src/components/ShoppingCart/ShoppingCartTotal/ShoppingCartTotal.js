import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { StyledShoppingCartTotal, StyledP, StyledValue } from './ShopingCartTotal.styles';

const ShoppingCartTotal = () => {
    const currency = useSelector(state => state.currency.currentCurrency);
    const exchangeRate = useSelector(state => state.currency.exchangeRate);

    const basketValue = useSelector(state => state.basket.total);
    const currencySymbol = useSelector(state => state.basket.currencySymbol);

    const [calculatedValue, setCalculatedValue] = useState(0);

    useEffect(() => {
        switch(currency) {
            case 'eur':
                setCalculatedValue(basketValue * exchangeRate.eur);
                break;
            case 'pln':
                setCalculatedValue(basketValue * exchangeRate.pln);
                break;
            case 'gbp':
                setCalculatedValue(basketValue * exchangeRate.gbp);
                break;
            default:
                setCalculatedValue(basketValue);
                break;
        }
    }, [basketValue, exchangeRate, currency])

    return(
        <StyledShoppingCartTotal>
            <StyledP>
                Total
            </StyledP>
            <StyledValue>
               {currencySymbol} {calculatedValue ? calculatedValue.toFixed(2) : '0.00'}
            </StyledValue>
        </StyledShoppingCartTotal>
    )
}

export default ShoppingCartTotal;