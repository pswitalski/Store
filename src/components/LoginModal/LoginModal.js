import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { closeLoginModal } from 'features/loginModalOpen/loginModalSlice';

import { StyledModal } from 'assets/styles/Modal.styles';

import ModalHeader from 'components/ModalHeader/ModalHeader';
import ModalButton from 'components/ModalButton/ModalButton';

const LoginModal = ({active = false}) => {

    const dispatch = useDispatch()

    const closeMenuHandler = () => {
        dispatch(closeLoginModal());
    }

    return(
        <StyledModal active={active} >
            <ModalHeader text='login' close={closeMenuHandler} />
        </StyledModal>
    )
}

LoginModal.propTypes = {
    active: PropTypes.bool
}

export default LoginModal;