import React from 'react';

import { StyledFooter } from './Footer.styles';

import TopFooter from './TopFooter/TopFooter';
import MiddleFooter from './MiddleFooter/MiddleFooter';
import BottomFooter from './BottomFooter/BottomFooter';
import { Wrapper } from 'assets/styles/Wrapper';

const Footer = () => {
    return(
        <StyledFooter>
            <Wrapper>
                <TopFooter />
                <MiddleFooter />
                <BottomFooter />
            </Wrapper>
        </StyledFooter>
    )
}

export default Footer;