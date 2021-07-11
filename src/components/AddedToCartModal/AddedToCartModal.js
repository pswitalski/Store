import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { closeAddedModal, removeLastAddedItem } from 'features/addedToCart/addetToCartSlice';

import { StyledAddedToCartModal, StyledModalBody, StyledCloseButton, StyledH1, StyledLink } from './AddedToCartModal.styles';

import BasketItem from 'components/BasketItem/BasketItem';
import ModalButton from 'components/ModalButton/ModalButton';

const AddedToCartModal = () => {

    const dispatch = useDispatch();

    const closeModalHandler = () => {
        dispatch(closeAddedModal());
        dispatch(removeLastAddedItem());
    }

    const lastAddedItem = useSelector(state => state.addedToCart.addedItem);

    return(
        <StyledAddedToCartModal>
            <StyledModalBody>
                <StyledCloseButton onClick={closeModalHandler} />
                <StyledH1>Item added to cart</StyledH1>
                <BasketItem product={lastAddedItem} noControls />
                <ModalButton text="continue shopping" onClick={closeModalHandler} />
                <StyledLink to="/basket" onClick={closeModalHandler} >
                    <ModalButton text="go to basket" isDark />
                </StyledLink>
            </StyledModalBody>
        </StyledAddedToCartModal>
    )
}

export default AddedToCartModal;