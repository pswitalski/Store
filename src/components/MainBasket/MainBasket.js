import React from 'react';

import Button from 'components/ItemCard/Button/Button';
import BasketItem from 'components/BasketItem/BasketItem';

import { useSelector, useDispatch } from 'react-redux';
import { clearBasket } from 'features/basket/basketSlice';

import { StyledMainBasket, StyledHeader, StyledItemsContainer, StyledSummaryContainer, StyledH1, StyledButton, StyledP, StyledSpan } from './MainBasket.styles';

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
                    <StyledSpan>{` ${currencySymbol} ${total.toFixed(2)}`}</StyledSpan>
                </StyledP>
                <StyledP>Shipping: <StyledSpan>FREE!</StyledSpan></StyledP>
                <Button text="check out" />
            </StyledSummaryContainer>
        </StyledMainBasket>
    )
}

export default MainBasket;