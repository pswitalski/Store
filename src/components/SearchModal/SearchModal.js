import React from 'react';

import { useDispatch } from 'react-redux';
import { closeSearchModalOpen } from 'features/search/searchSlice';

import ModalHeader from 'components/ModalHeader/ModalHeader';

import { StyledModal } from 'assets/styles/Modal.styles';

const SearchModal = () => {

    const dispatch = useDispatch();

    const closeModalHandler = () => {
        dispatch(closeSearchModalOpen())
    }

    return(
        <StyledModal>
            <ModalHeader text="search" close={closeModalHandler} />
        </StyledModal>
    )
}

export default SearchModal;