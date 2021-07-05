import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { toggleIsUserLogIn, toggleUserProfileModal } from 'features/currentUser/currentUserSlice';
import { toggleLoginModal } from 'features/loginModalOpen/loginModalSlice';

import { StyledP, StyledForm, StyledInput, StyledLabel, StyledError } from 'components/LoginModal/LoginModal.styles';

import ModalButton from 'components/ModalButton/ModalButton';
import ExampleLoginData from './ExampleLoginData/ExampleLoginData';

import { useForm } from 'react-hook-form';

import { loginUser } from 'helpers/loginUser';

const Login = ({changeMode}) => {
    const emailCheck = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gm);
    const { register, handleSubmit, formState } = useForm();

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [apiError, setApiError] = useState('');

    const dispatch = useDispatch();

    const onSubmit = async (data) => {

       const response = await loginUser(data);
       console.log(response.token)

       if (response === 'Email or password invalid.') {
        setApiError(response);
        } else {
            setApiError('');
            window.localStorage.setItem('token', response.token);
            dispatch(toggleIsUserLogIn(true));
            dispatch(toggleLoginModal({type: 'CLOSE'}));
            dispatch(toggleUserProfileModal({type: 'OPEN'}));
        }
    }

    useEffect(() => {
        setErrorMessage('');

        if ('password' in formState.errors) {
            setPasswordError(true);
            setErrorMessage('You must enter password.')
        } else {
            setPasswordError(false);
        }

        if ('email' in formState.errors) {
            setEmailError(true);
            setErrorMessage('You must enter valid email.')
        } else {
            setEmailError(false);
        }

        if (apiError !== '') {
            setErrorMessage(apiError);
        }

    }, [formState])

    return(
        <>
            <StyledP>{errorMessage ? <StyledError>{errorMessage}</StyledError> : 'If you have an account, please log in.'}</StyledP>
            <StyledForm onSubmit={handleSubmit(onSubmit)} >
                <StyledLabel htmlFor="email" >email</StyledLabel>
                <StyledInput id="email" type="email" placeholder="Enter email" {...register('email', {required: true, pattern: emailCheck})} error={emailError} />
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