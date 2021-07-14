import React from 'react';

import { StyledLoadingIndicator, StyledContainer, StyledBoxTop, StyledBoxBottom, StyledBoxLeft, StyledBoxRight } from './LoadingIndicator.styles';

const LoadingIndicator = () => {
    return(
        <StyledLoadingIndicator data-testid="loading" >
            <StyledContainer>
                <StyledBoxTop data-testid="square" />
                <StyledBoxRight data-testid="square" />
                <StyledBoxBottom data-testid="square" />
                <StyledBoxLeft data-testid="square" />
            </StyledContainer>
        </StyledLoadingIndicator>
    )
}

export default LoadingIndicator;