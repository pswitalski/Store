import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { toggleLoginModal } from 'features/loginModalOpen/loginModalSlice';

import { StyledModal } from 'assets/styles/Modal.styles';

import ModalHeader from 'components/ModalHeader/ModalHeader';
import Login from './Login/Login';
import Register from './Register/Register';

const LoginModal = () => {

    const dispatch = useDispatch()

    const [isRegister, setIsRegister] = useState(false);

    const closeMenuHandler = () => {
        dispatch(toggleLoginModal({type: 'CLOSE'}));
    }

    const handleModeChange = () => {
        setIsRegister(prevState => !prevState)
    }

    return(
        <StyledModal>
            <ModalHeader text={isRegister ? 'register' : 'login'} close={closeMenuHandler} />
            {!isRegister ? <Login changeMode={handleModeChange} /> : null}
            {isRegister ? <Register changeMode={handleModeChange} /> : null}
        </StyledModal>
    )
}

export default LoginModal;