import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import { StyledP, StyledForm, StyledInput, StyledLabel, StyledError, StyledRegisterSucces } from 'components/LoginModal/LoginModal.styles';
import ModalButton from 'components/ModalButton/ModalButton';

import { useForm } from 'react-hook-form';

import { sendNewUserToApi } from 'helpers/sendNewUserToApi';

const Register = ({changeMode}) => {
    const emailCheck = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gm);
    const passwordCheck = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)

    const { register, formState, handleSubmit, watch } = useForm();

    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [apiError, setApiError] = useState('');
    const [userRegistered, setUserRegistered] = useState(false);

    const onSubmit = async (data) => {
        const response = await sendNewUserToApi(data);

        if (response === 'Something went wrong. Try again.') {
            setApiError(response);
        } else {
            setApiError('');
            setUserRegistered(true);
        }
    }

    useEffect(() => {
        setErrorMessage('');

        if ('confirmpassword' in formState.errors) {
            setConfirmPasswordError(true);
            setErrorMessage('Passwords must be the same.')
        } else {
            setConfirmPasswordError(false);
        }

        if ('password' in formState.errors) {
            setPasswordError(true);
            setErrorMessage('Password must contain 1 digit, lower case and upper case and should be at least 8 digit long.')
        } else {
            setPasswordError(false);
        }

        if ('email' in formState.errors) {
            setEmailError(true);
            setErrorMessage('Email is invalid.')
        } else {
            setEmailError(false);
        }

        if ('username' in formState.errors) {
            setUsernameError(true);
            setErrorMessage('Username too short.')
        } else {
            setUsernameError(false);
        }

        if (apiError) {
            setErrorMessage(apiError)
        }

    }, [formState])

    const passwordsMatch = () => {
        const password1 = watch('password');
        const password2 = watch('confirmpassword')

        if (password1 === password2) {
            return true;
        }

        return false;
    }


    return(
        <>
            <StyledP className={userRegistered ? 'hide' : ''} >{errorMessage ? <StyledError>{errorMessage}</StyledError> : 'Create new account.'}</StyledP>
            <StyledForm onSubmit={handleSubmit(onSubmit)} className={userRegistered ? 'hide' : ''} >
            <StyledLabel htmlFor="username" >username</StyledLabel>
                <StyledInput id="username" type="text" placeholder="Enter username" {...register('username', {required: true, minLength: 6})} error={usernameError} />

                <StyledLabel htmlFor="email" >email</StyledLabel>
                <StyledInput id="email" type="email" placeholder="Enter your email" {...register('email', {required: true, pattern: emailCheck})} error={emailError} />

                <StyledLabel htmlFor="password" >password</StyledLabel>
                <StyledInput id="password" type="password" placeholder="Your password" {...register('password', {required: true, pattern: passwordCheck})} error={passwordError} />

                <StyledLabel htmlFor="repeatPassword" >repeat password</StyledLabel>
                <StyledInput id="repeatPassword" type="password" placeholder="Repeat password" {...register('confirmpassword', {required: true, validate: passwordsMatch })} error={confirmPasswordError} />


                <ModalButton text="register" isDark />
            </StyledForm>

            <StyledRegisterSucces className={!userRegistered ? 'hide' : ''} >
                Succes! You can now log in. Please note, that there was no real changes in database. You must use example data to log in.
            </StyledRegisterSucces>

            <StyledP className={userRegistered ? 'hide' : ''} >Already have an account?</StyledP>
            <ModalButton text="log in" onClick={changeMode} />
        </>
    )
}

Register.propTypes = {
    changeMode: PropTypes.func
}

export default Register;