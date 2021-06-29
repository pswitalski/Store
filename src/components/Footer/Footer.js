import React from 'react';

import { StyledFooter, StyledFlexContainer } from './Footer.styles';

import TopFooter from './TopFooter/TopFooter';
import MiddleFooter from './MiddleFooter/MiddleFooter';
import BottomFooter from './BottomFooter/BottomFooter';
import { Wrapper } from 'assets/styles/Wrapper';

const Footer = () => {
    return(
        <StyledFooter>
            <Wrapper>
                <StyledFlexContainer>
                    <TopFooter />
                    <MiddleFooter />
                    <BottomFooter />
                </StyledFlexContainer>
            </Wrapper>
        </StyledFooter>
    )
}

export default Footer;