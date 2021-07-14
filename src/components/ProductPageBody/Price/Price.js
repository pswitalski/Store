import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { StyledPrice, StyledP } from './Price.styles';

import Button from 'components/ItemCard/Button/Button';


const Price = ({id, price = 0, handleAddItemToBasket}) => {

    const currency = useSelector(state => state.currency);
    const { currentCurrency, exchangeRate } = currency;

    const [calculatedPrice, setCalculatedPrice] = useState(price);

    useEffect(() => {
        switch(currentCurrency) {
            case 'pln':
                const plnPrice = price * exchangeRate.pln;
                setCalculatedPrice(plnPrice);
                break;
            case 'gbp':
                const gbpPrice = price * exchangeRate.gbp;
                setCalculatedPrice(gbpPrice);
                break;
            case 'eur':
                const eurPrice = price * exchangeRate.eur;
                setCalculatedPrice(eurPrice);
                break;
            default:
                setCalculatedPrice(price);
                break;
        }
    }, [currentCurrency, exchangeRate, price]);

    return(
        <StyledPrice>
            <StyledP>{exchangeRate.symbol ? exchangeRate.symbol : '$'} {calculatedPrice.toFixed(2)}</StyledP>
            <Button text="add to cart" onClick={handleAddItemToBasket} />
        </StyledPrice>
    )
}

Price.propTypes = {
    id: PropTypes.number,
    price: PropTypes.number,
    handleAddItemToBasket: PropTypes.func
}

export default Price;