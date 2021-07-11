import React from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { closeShoppingCartModal } from 'features/basket/basketSlice';

import { StyledModal } from 'assets/styles/Modal.styles';
import { StyledItemsContainer } from './ShoppingCartModal.styles';

import ModalHeader from 'components/ModalHeader/ModalHeader';
import ModalButton from 'components/ModalButton/ModalButton';
import BasketItem from 'components/BasketItem/BasketItem';
import ShoppingCartTotal from './ShoppingCartTotal/ShoppingCartTotal';

import { useCloseModals } from 'hooks/useCloseModals';

const ShoppingCartModal = () => {

    const dispatch = useDispatch();

    const closeModalHandler = () => {
        dispatch(closeShoppingCartModal());
    }

    const itemsInBasket = useSelector(state => state.basket.itemsInBasket);

    const createBasketItems = () => {
        const items = itemsInBasket.map(item => <BasketItem product={item.product} key={item.product.id} quantity={item.quantity} />)
        return items;
    }

    const closeAllModals = useCloseModals();

    return(
        <StyledModal>
            <ModalHeader text="shopping cart" close={closeModalHandler} />
            <StyledItemsContainer>
                {createBasketItems()}
            </StyledItemsContainer>
            <ShoppingCartTotal />
            <Link to="/checkout" onClick={closeAllModals} ><ModalButton text="check out" isDark /></Link>
            <Link to="/basket" onClick={closeAllModals} ><ModalButton text="view cart" /></Link>
        </StyledModal>
    )
}

export default ShoppingCartModal;