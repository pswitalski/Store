import React from 'react';

import { StyledLoadingIndicator, StyledContainer, StyledBoxTop, StyledBoxBottom, StyledBoxLeft, StyledBoxRight } from './LoadingIndicator.styles';

const LoadingIndicator = () => {
    return(
        <StyledLoadingIndicator>
            <StyledContainer>
                <StyledBoxTop />
                <StyledBoxRight />
                <StyledBoxBottom />
                <StyledBoxLeft />
            </StyledContainer>
        </StyledLoadingIndicator>
    )
}

export default LoadingIndicator;