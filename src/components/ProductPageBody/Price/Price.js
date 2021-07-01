import React from 'react';
import PropTypes from 'prop-types';

import { StyledPrice, StyledP } from './Price.styles';

import Button from 'components/ItemCard/Button/Button';


const Price = ({id, price = 0}) => {
    return(
        <StyledPrice>
            <StyledP>$ {price.toFixed(2)}</StyledP>
            <Button text="add to card" />
        </StyledPrice>
    )
}

Price.propTypes = {
    id: PropTypes.number,
    price: PropTypes.number
}

export default Price;