import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toggleShoppingCartModal } from 'features/basket/basketSlice';

import { StyledModal } from 'assets/styles/Modal.styles';
import { StyledItemsContainer } from './ShoppingCartModal.styles';

import ModalHeader from 'components/ModalHeader/ModalHeader';
import ModalButton from 'components/ModalButton/ModalButton';
import BasketItem from 'components/BasketItem/BasketItem';

const ShoppingCartModal = () => {

    const dispatch = useDispatch();

    const closeModalHandler = () => {
        dispatch(toggleShoppingCartModal({type: 'CLOSE'}));
    }

    const itemsInBasket = useSelector(state => state.basket.itemsInBasket);

    const createBasketItems = () => {
        const items = itemsInBasket.map(item => <BasketItem product={item} key={item.id} />)
        return items;
    }

    return(
        <StyledModal>
            <ModalHeader text="shopping cart" close={closeModalHandler} />
            <StyledItemsContainer>
                {createBasketItems()}
            </StyledItemsContainer>
            <ModalButton text="check out" isDark />
            <ModalButton text="view cart" />
        </StyledModal>
    )
}

export default ShoppingCartModal;