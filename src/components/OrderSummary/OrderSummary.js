import React from 'react';

import { useSelector } from 'react-redux';

import { StyledOrderSummary, StyledH1, StyledDataContainer, StyledItemsContainer, StyledP, StyledSpan } from './OrderSummary.styles';

import ModalButton from 'components/ModalButton/ModalButton';
import BasketItem from 'components/BasketItem/BasketItem';

const OrderSummary = () => {

    const basket = useSelector(state => state.basket);
    const { currencySymbol, itemsInBasket, total, quantityOfItems } = basket;
    console.log(basket)
    console.log(itemsInBasket)

    const generateItems = () => {
        const items = itemsInBasket.map(item => {
            return(
                <BasketItem product={item.product} quantity={item.quantity} key={item.product.id} checkout />
            )
        })
        return items;
    }

    return(
        <StyledOrderSummary>
            <StyledH1>
                Your order summary
            </StyledH1>
            <StyledItemsContainer>
                {generateItems()}
            </StyledItemsContainer>
            <StyledDataContainer>
                <StyledP>
                    {quantityOfItems} item{quantityOfItems > 1 ? 's' : null} in basket.
                </StyledP>
                <StyledP>
                   Total: <StyledSpan>{currencySymbol}{total}</StyledSpan>
                </StyledP>
                <ModalButton isDark text="confirm order" />
            </StyledDataContainer>
        </StyledOrderSummary>
    )
}

export default OrderSummary;