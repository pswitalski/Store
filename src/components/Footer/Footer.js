import React from 'react';

import { StyledFooter, StyledFlexContainer } from './Footer.styles';

import TopFooter from './TopFooter/TopFooter';
import MiddleFooter from './MiddleFooter/MiddleFooter';
import BottomFooter from './BottomFooter/BottomFooter';
import { Wrapper } from 'assets/styles/Wrapper';

import { useCloseModals } from 'hooks/useCloseModals';

const Footer = () => {


    const closeAllModals = useCloseModals();

    return(
        <StyledFooter onClick={closeAllModals} >
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