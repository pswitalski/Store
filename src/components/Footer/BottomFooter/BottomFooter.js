import React from 'react';

import { StyledBottomFooter, StyledContainer, StyledImg, StyledP } from './BottomFooter.styles';

import visaImg from 'assets//img/visa.png';
import masterCardImg from 'assets//img/mastercard.png';
import paypalImg from 'assets//img/paypal.png';
import americanImg from 'assets//img/american.png';

const BottomFooter = () => {
    return(
        <StyledBottomFooter>
            <StyledContainer>
                <StyledP>
                    Copyright &copy; 2021 all rights reserved
                </StyledP>
            </StyledContainer>
            <StyledContainer>
                <StyledImg src={visaImg} alt="visa"  />
                <StyledImg src={masterCardImg} alt="master card"  />
                <StyledImg src={paypalImg} alt="paypal"  />
                <StyledImg src={americanImg} alt="american express"  />
            </StyledContainer>
        </StyledBottomFooter>
    )
}

export default BottomFooter;