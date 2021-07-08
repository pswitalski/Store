import React from 'react';
import PropTypes from 'prop-types';

import { StyledBasketDeleteButton, StyledImg } from './BasketDeleteButton.styles';

import deleteImg from 'assets/icons/trash 1.png';

const BasketDeleteButton = ({onClick}) => {
    return(
        <StyledBasketDeleteButton onClick={onClick} >
            <StyledImg src={deleteImg} alt="delete" />
        </StyledBasketDeleteButton>
    )
}

BasketDeleteButton.propTypes = {
    onClick: PropTypes.func
}

export default BasketDeleteButton;