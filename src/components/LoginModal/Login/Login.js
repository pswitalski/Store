import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { StyledP, StyledForm, StyledInput, StyledLabel, StyledError } from 'components/LoginModal/LoginModal.styles';

import ModalButton from 'components/ModalButton/ModalButton';
import ExampleLoginData from './ExampleLoginData/ExampleLoginData';

import { useForm } from 'react-hook-form';

const Login = ({changeMode}) => {

    const { register, handleSubmit, formState } = useForm();

    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = (data) => {
        console.log(data);
    }

    useEffect(() => {
        setErrorMessage('');

        if ('password' in formState.errors) {
            setPasswordError(true);
            setErrorMessage('You must enter password.')
        } else {
            setPasswordError(false);
        }

        if ('username' in formState.errors) {
            setUsernameError(true);
            setErrorMessage('You must enter username.')
        } else {
            setUsernameError(false);
        }

    }, [formState])

    return(
        <>
            <StyledP>{errorMessage ? <StyledError>{errorMessage}</StyledError> : 'If you have an account, please log in.'}</StyledP>
            <StyledForm onSubmit={handleSubmit(onSubmit)} >
                <StyledLabel htmlFor="username" >username</StyledLabel>
                <StyledInput id="username" type="text" placeholder="Enter username" {...register('username', {required: true})} error={usernameError} />
                <StyledLabel htmlFor="password" >password</StyledLabel>
                <StyledInput id="password" type="password" placeholder="Your password" {...register('password', {required: true})} error={passwordError} />

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