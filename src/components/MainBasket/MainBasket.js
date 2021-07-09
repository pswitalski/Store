import React from 'react';

import Button from 'components/ItemCard/Button/Button';

import { useSelector } from 'react-redux';

import { StyledMainBasket, StyledHeader, StyledItemsContainer, StyledSummaryContainer, StyledH1, StyledButton, StyledP } from './MainBasket.styles';

const MainBasket = () => {

    const basket = useSelector(state => state.basket);
    const {itemsInBasket, currencySymbol, quantityOfItems, total} = basket;

    console.log(basket)

    return(
        <StyledMainBasket>
            <StyledHeader>
                <StyledH1>{`Basket (${quantityOfItems})`}</StyledH1>
                <Button text="clear basket" />
            </StyledHeader>
            <StyledItemsContainer></StyledItemsContainer>
            <StyledSummaryContainer>
                <StyledH1>Summary</StyledH1>
                <StyledP>
                    {`Total: ${currencySymbol} ${total}`}
                </StyledP>
                <StyledP>Shipping: 5$ to do</StyledP>
                <StyledP>With shipping: to do</StyledP>
                <Button text="check out" />
            </StyledSummaryContainer>
        </StyledMainBasket>
    )
}

export default MainBasket;