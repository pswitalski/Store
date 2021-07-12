import React, { useState } from 'react';

import { Redirect } from 'react-router';

import { useSelector, useDispatch } from 'react-redux';
import { clearBasket } from 'features/basket/basketSlice';

import { StyledOrderSummary, StyledH1, StyledDataContainer, StyledItemsContainer, StyledP, StyledSpan } from './OrderSummary.styles';

import ModalButton from 'components/ModalButton/ModalButton';
import BasketItem from 'components/BasketItem/BasketItem';

import { sendOrderToApi } from 'helpers/sendOrderToApi';

const OrderSummary = () => {

    const basket = useSelector(state => state.basket);
    const { currencySymbol, itemsInBasket, total, quantityOfItems } = basket;

    const isUserLoggedIn = useSelector(state => state.currentUser.isUserLogIn);

    const user = useSelector(state => state.exampleUser);

    const generateItems = () => {
        const items = itemsInBasket.map(item => {
            return(
                <BasketItem product={item.product} quantity={item.quantity} key={item.product.id} checkout />
            )
        })
        return items;
    }

    const dispatch = useDispatch();

    const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const confirmOrderHandler = async () => {
        const response = await sendOrderToApi(user.exampleUser.data.id, itemsInBasket);

        if (typeof(response) === 'string') {
            console.log('string');
            setErrorMessage(response);
            return;
        }

        setErrorMessage('');
        setIsOrderConfirmed(true);
        dispatch(clearBasket());
    }

    return(
        <StyledOrderSummary>
            {quantityOfItems === 0 && !isOrderConfirmed ? <Redirect to="/basket" /> : null}
            <StyledH1>
                {isOrderConfirmed ? "Thank you for your order" : "Your order summary"}
            </StyledH1>
            <StyledItemsContainer>
                {isOrderConfirmed ? <StyledP>Your order is confirmed.</StyledP> : null}
                {!isOrderConfirmed ? generateItems() : null}
            </StyledItemsContainer>
            <StyledDataContainer className={isOrderConfirmed ? 'disabled' : ''} >
                <StyledP>
                    {quantityOfItems} item{quantityOfItems > 1 ? 's' : null} in basket.
                </StyledP>
                <StyledP>
                   Total: <StyledSpan>{currencySymbol}{total.toFixed(2)}</StyledSpan>
                </StyledP>
                {!isUserLoggedIn ? <StyledP className="red" >To confirm your order you must log in.</StyledP> : null}
                {errorMessage ? <StyledP className="red" >{errorMessage}</StyledP> : null}
                <ModalButton isDark text="confirm order" disabled={isUserLoggedIn ? false : true} onClick={confirmOrderHandler} />
            </StyledDataContainer>
        </StyledOrderSummary>
    )
}

export default OrderSummary;