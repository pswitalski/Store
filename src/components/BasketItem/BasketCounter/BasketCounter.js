import React from 'react';
import PropTypes from 'prop-types';

import { StyledBasketCounter, StyledButton, StyledP, StyledImg } from './BasketCounter.styles';

import plusImg from 'assets/icons/plus-sm 1.png';
import minusImg from 'assets/icons/minus-sm 1.png';

const BasketCounter = ({value, increment, decrement, checkout}) => {
    return (
        <StyledBasketCounter className={checkout ? 'hide' : ''} >
            <StyledButton onClick={decrement} disabled={value < 2 ? true : false} className={checkout ? 'hide' : ''} >
                <StyledImg src={minusImg}  alt="minus"/>
            </StyledButton>
            <StyledP>{value}</StyledP>
            <StyledButton onClick={increment} className={checkout ? 'hide' : ''} >
                <StyledImg src={plusImg} alt="plus" />
            </StyledButton>
        </StyledBasketCounter>
    )
}

BasketCounter.propTypes = {
    value: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    checkout: PropTypes.bool
}

export default BasketCounter;