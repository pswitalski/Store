import React from 'react';
import PropTypes from 'prop-types';

import { StyledBasketDeleteButton, StyledImg } from './BasketDeleteButton.styles';

import deleteImg from 'assets/icons/trash 1.png';

const BasketDeleteButton = () => {
    return(
        <StyledBasketDeleteButton>
            <StyledImg src={deleteImg} alt="delete" />
        </StyledBasketDeleteButton>
    )
}

export default BasketDeleteButton;