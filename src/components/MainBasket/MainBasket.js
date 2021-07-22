import React, { useState, useEffect } from 'react';

import Button from 'components/ItemCard/Button/Button';
import BasketItem from 'components/BasketItem/BasketItem';

import { useSelector, useDispatch } from 'react-redux';
import { clearBasket } from 'features/basket/basketSlice';

import { StyledMainBasket, StyledHeader, StyledItemsContainer, StyledSummaryContainer, StyledH1, StyledP, StyledSpan, StyledLink } from './MainBasket.styles';

const MainBasket = () => {

    const basket = useSelector(state => state.basket);
    const {itemsInBasket, currencySymbol, quantityOfItems, total} = basket;

    const dispatch = useDispatch(clearBasket());

    const clearBasketHandler = () => {
        dispatch(clearBasket());
    }

    const generateItems = () => {
        const items = itemsInBasket.map(item => {
            return(
                <BasketItem product={item.product} quantity={item.quantity} key={item.product.id} />
            )
        })
        return items;
    }

    const [calculatedValue, setCalculatedValue] = useState(0);

    const currency = useSelector(state => state.currency.currentCurrency);
    const exchangeRate = useSelector(state => state.currency.exchangeRate);

    useEffect(() => {
        switch(currency) {
            case 'eur':
                setCalculatedValue(total * exchangeRate.eur);
                break;
            case 'pln':
                setCalculatedValue(total * exchangeRate.pln);
                break;
            case 'gbp':
                setCalculatedValue(total * exchangeRate.gbp);
                break;
            default:
                setCalculatedValue(total);
                break;
        }
    }, [total, exchangeRate, currency])


    return(
        <StyledMainBasket>
            <StyledHeader>
                <StyledH1>{`Basket (${quantityOfItems})`}</StyledH1>
                <Button text="clear basket" onClick={clearBasketHandler} />
            </StyledHeader>
            <StyledItemsContainer>
                {quantityOfItems === 0 ? <StyledP>Your basket is empty.</StyledP> : null}
                {generateItems()}
            </StyledItemsContainer>
            <StyledSummaryContainer>
                <StyledH1>Summary</StyledH1>
                <StyledP>
                    Total:
                    <StyledSpan>{` ${currencySymbol} ${calculatedValue.toFixed(2)}`}</StyledSpan>
                </StyledP>
                <StyledP>Shipping: <StyledSpan>FREE!</StyledSpan></StyledP>
                <StyledLink to="/checkout" >
                    <Button text="check out" disabled={quantityOfItems === 0 ? true : false} />
                </StyledLink>
            </StyledSummaryContainer>
        </StyledMainBasket>
    )
}

export default MainBasket;