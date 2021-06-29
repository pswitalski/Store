import React from 'react';

import { StyledFooter } from './Footer.styles';

import TopFooter from './TopFooter/TopFooter';
import MiddleFooter from './MiddleFooter/MiddleFooter';
import BottomFooter from './BottomFooter/BottomFooter';

const Footer = () => {
    return(
        <StyledFooter>
            <TopFooter />
            <MiddleFooter />
            <BottomFooter />
        </StyledFooter>
    )
}

export default Footer;