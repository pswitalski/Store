import React from 'react';

import { useDispatch } from 'react-redux';
import { toggleShoppingCartModal } from 'features/basket/basketSlice';

import { StyledModal } from 'assets/styles/Modal.styles';

import ModalHeader from 'components/ModalHeader/ModalHeader';
import ModalButton from 'components/ModalButton/ModalButton';

const ShoppingCartModal = () => {

    const dispatch = useDispatch();

    const closeModalHandler = () => {
        dispatch(toggleShoppingCartModal({type: 'CLOSE'}));
    }

    return(
        <StyledModal>
            <ModalHeader text="shopping cart" close={closeModalHandler} />
            <ModalButton text="check out" isDark />
            <ModalButton text="view cart" />
        </StyledModal>
    )
}

export default ShoppingCartModal;