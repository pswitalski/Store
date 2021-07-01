import React from 'react';

import { StyledPayments, StyledImg, StyledP } from './Payments.styles';

import visaImg from 'assets/img/visa_x42.png';
import mastercardImg from 'assets/img/mastercard_x42.png';
import paypalImg from 'assets/img/paypal_2_x42.png';
import americanImg from 'assets/img/american-express_x42.png';

const Payments = () => {
    return(
        <StyledPayments>
            <StyledP>guaranteed safe checkout</StyledP>
            <StyledImg src={visaImg} alt="visa" />
            <StyledImg src={mastercardImg} alt="mastercard" />
            <StyledImg src={paypalImg} alt="paypal" />
            <StyledImg src={americanImg} alt="american express" />
        </StyledPayments>
    )
}

export default Payments;