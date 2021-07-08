import React from 'react';
import PropTypes from 'prop-types';

import { StyledBasketCounter, StyledButton, StyledP, StyledImg } from './BasketCounter.styles';

import plusImg from 'assets/icons/plus-sm 1.png';
import minusImg from 'assets/icons/minus-sm 1.png';

const BasketCounter = ({value, increment, decrement}) => {
    return (
        <StyledBasketCounter>
            <StyledButton onClick={decrement} >
                <StyledImg src={minusImg}  alt="minus"/>
            </StyledButton>
            <StyledP>{value}</StyledP>
            <StyledButton onClick={increment} >
                <StyledImg src={plusImg} alt="plus" />
            </StyledButton>
        </StyledBasketCounter>
    )
}

BasketCounter.propTypes = {
    value: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func
}

export default BasketCounter;