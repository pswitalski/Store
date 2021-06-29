import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { subscribe } from 'features/newsletterSubscribe/newsletterSubscribeSlice';

import { StyledNewsletterSection, StyledForm, StyledButton, StyledH3, StyledInput, StyledP, StyledSpan, StyledMessage, StyledLoading, StyledGirl, StyledGuy } from './NewsletterSection.styles';

import { newsletterSubscribe } from 'helpers/newsletterSubscribe';

import loadingImg from 'assets/icons/refresh 1.png';
import girlImg from 'assets/img/girl.png';
import guyImg from 'assets/img/guy.png';

const NewsletterSection = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const isSubscribed = useSelector(state => state.newsletterSubscribe);

    const inputChangeHandler = (e) => {
        setInputValue(e.target.value)
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const response = await newsletterSubscribe(inputValue);

        if (response.title === 'newsletter') {
            dispatch(subscribe())
            setError('');
            setInputValue('');
        } else {
            setError(response);
        }
        setIsLoading(false);
    }

    return(
        <StyledNewsletterSection>
            <StyledForm onSubmit={submitHandler} >
                <StyledH3>special offer</StyledH3>
                <StyledP>subscribe<br /> and <StyledSpan>get 10% off</StyledSpan></StyledP>
                <StyledInput placeholder="Enter your email" type="email" value={inputValue} onChange={inputChangeHandler} disabled={isSubscribed.newsletterSubscribe ? true: false} />
                <StyledButton disabled={isSubscribed.newsletterSubscribe ? true: false} type="submit" >subscribe</StyledButton>
                {isLoading ? <StyledLoading src={loadingImg} alt="loading" /> : null}
                <StyledMessage className={error || isSubscribed.newsletterSubscribe ? 'active' : ''} >{error? `${error}` : 'thank you for subscribe'}</StyledMessage>
            </StyledForm>
            <StyledGirl src={girlImg} alt="girl" />
            <StyledGuy src={guyImg} alt="guy" />
        </StyledNewsletterSection>
    )
}

export default NewsletterSection;