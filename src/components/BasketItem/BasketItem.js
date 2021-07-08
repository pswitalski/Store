import React from 'react';
import PropTypes from 'prop-types';

import { StyledBasketItem, StyledDataContainer, StyledImageContainer, StyledImg, StyledCategory, StyledName, StyledControls } from './BasketItem.styles';

import BasketCounter from './BasketCounter/BasketCounter';
import BasketPrice from './BasketPrice/BasketPrice';
import BasketDeleteButton from './BasketDeleteButton/BasketDeleteButton';

const BasketItem = ({quantity, product: {id, title, price, description, category, image}}) => {
    return(
        <StyledBasketItem>
            <StyledImageContainer>
                <StyledImg src={image} alt={title} />
            </StyledImageContainer>
            <StyledDataContainer>
                <StyledName>{title}</StyledName>
                <StyledCategory>{category}</StyledCategory>
                <StyledControls>
                    <BasketCounter value={quantity} />
                    <BasketPrice price={20} currency="$" />
                    <BasketDeleteButton />
                </StyledControls>
            </StyledDataContainer>
        </StyledBasketItem>
    )
};

BasketItem.propTypes = {
    product: PropTypes.object,
    quantity: PropTypes.number
}

export default BasketItem;