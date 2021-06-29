import React from 'react';

import { StyledNewsletterSection, StyledForm, StyledButton, StyledH3, StyledInput, StyledP, StyledSpan } from './NewsletterSection.styles';

const NewsletterSection = () => {
    return(
        <StyledNewsletterSection>
            <StyledForm>
                <StyledH3>special offer</StyledH3>
                <StyledP>subscribe<br /> and <StyledSpan>get 10% off</StyledSpan></StyledP>
                <StyledInput placeholder="Enter your email" type="email" />
                <StyledButton type="submit" >subscribe</StyledButton>
            </StyledForm>
        </StyledNewsletterSection>
    )
}

export default NewsletterSection;