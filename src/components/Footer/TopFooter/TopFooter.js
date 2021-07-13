import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { subscribe } from 'features/newsletterSubscribe/newsletterSubscribeSlice';

import { StyledTopFooter, StyledContainer, StyledP, StyledButton, StyledForm, StyledInput } from './TopFooter.styles';

import SocialMediaLink from 'components/Header/SocialMediaLink/SocialMediaLink';

import facebook from 'assets/icons/facebook 1.png';
import twitter from 'assets/icons/logo-twitter 1.png';
import instagram from 'assets/icons/instagram 1.png';
import pinterest from 'assets/icons/logo-pinterest 1.png';

import { newsletterSubscribe } from 'helpers/newsletterSubscribe';

const initialPlaceholder = 'Enter your email';

const TopFooter = () => {

    const [inputValue, setInputValue] = useState('');
    const [placeholderValue, setPlaceholderValue] = useState(initialPlaceholder)
    const isSubscribed = useSelector(state => state.newsletterSubscribe);
    const dispatch = useDispatch();

    const inputChangeHandler = (e) => {
        setInputValue(e.target.value);
    }

    const submitFormHandler = async (e) => {
        e.preventDefault();
        const response = await newsletterSubscribe(inputValue);

        if (response.title === 'newsletter') {
            dispatch(subscribe());
            setPlaceholderValue('Thank You for subscribe');
            setInputValue('');
        } else {
            setPlaceholderValue(response);
            setInputValue('');
        }
    }

    return(
        <StyledTopFooter>
            <StyledContainer className="mobileHide" >
                <StyledP>be in touch with us:</StyledP>
            </StyledContainer>
            <StyledContainer>
                <StyledForm onSubmit={submitFormHandler} >
                    <StyledInput
                    disabled={isSubscribed.newsletterSubscribe ? true : false} type="email"
                    placeholder={placeholderValue}
                    value={inputValue}
                    onChange={inputChangeHandler} />

                    <StyledButton type="submit" disabled={isSubscribed.newsletterSubscribe ? true : false} >join us</StyledButton>
                </StyledForm>
            </StyledContainer>
            <StyledContainer className="mobileHide">
            <SocialMediaLink icon={facebook} alt="facebook" url="https://www.facebook.com/" />
                    <SocialMediaLink icon={twitter} alt="twitter" url="https://twitter.com/" />
                    <SocialMediaLink icon={instagram} alt="instagram" url="https://www.instagram.com/" />
                    <SocialMediaLink icon={pinterest} alt="pinterest" url="https://www.pinterest.com/" />
            </StyledContainer>
        </StyledTopFooter>
    )
}

export default TopFooter;