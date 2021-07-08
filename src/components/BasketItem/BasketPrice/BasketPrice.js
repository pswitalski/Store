import React from 'react';
import PropTypes from 'prop-types';

import { StyledBasketPrice } from './BasketPrice.styles';

const BasketPrice = ({price, currency}) => {
    return(
        <StyledBasketPrice>
           {currency} {price}
        </StyledBasketPrice>
    )
}

BasketPrice.propTypes = {
    price: PropTypes.number,
    currency: PropTypes.string
}

export default BasketPrice;