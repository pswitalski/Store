import React from 'react';
import PropTypes from 'prop-types';

import { StyledP, StyledForm, StyledInput, StyledLabel } from 'components/LoginModal/LoginModal.styles';

import ModalButton from 'components/ModalButton/ModalButton';
import ExampleLoginData from './ExampleLoginData/ExampleLoginData';

const Login = ({changeMode}) => {
    return(
        <>
            <StyledP>If you have an account, please log in.</StyledP>
            <StyledForm>
                <StyledLabel htmlFor="email" >email</StyledLabel>
                <StyledInput id="email" type="email" placeholder="Enter your email" />

                <StyledLabel htmlFor="password" >password</StyledLabel>
                <StyledInput id="password" type="password" placeholder="Your password" />

                <ModalButton text="login" isDark />
            </StyledForm>

            <ExampleLoginData />

            <StyledP>New customer?</StyledP>
            <ModalButton text="create account" onClick={changeMode} />
        </>
    )
}

Login.propTypes = {
    changeMode: PropTypes.func
}

export default Login;