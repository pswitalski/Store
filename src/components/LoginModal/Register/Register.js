import React from 'react';
import PropTypes from 'prop-types';

import { StyledP, StyledForm, StyledInput, StyledLabel } from 'components/LoginModal/LoginModal.styles';
import ModalButton from 'components/ModalButton/ModalButton';

const Register = ({changeMode}) => {
    return(
        <>
            <StyledP>Create new account.</StyledP>
            <StyledForm>
                <StyledLabel htmlFor="email" >email</StyledLabel>
                <StyledInput id="email" type="email" placeholder="Enter your email" />

                <StyledLabel htmlFor="password" >password</StyledLabel>
                <StyledInput id="password" type="password" placeholder="Your password" />

                <StyledLabel htmlFor="repeatPassword" >repeat password</StyledLabel>
                <StyledInput id="repeatPassword" type="password" placeholder="Repeat password" />

                <ModalButton text="login" isDark />
            </StyledForm>


            <StyledP>Already have an account?</StyledP>
            <ModalButton text="log in" onClick={changeMode} />
        </>
    )
}

Register.propTypes = {
    changeMode: PropTypes.func
}

export default Register;