import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { manageItemsInBasket } from 'features/basket/basketSlice';

import { StyledProductPageBody, StyledLeftContainer, StyledRightContainer, StyledImg } from './ProductPageBody.styles';

import Price from './Price/Price';
import Payments from './Payments/Payments';
import Description from './Description/Description';
import Comments from './Comments/Comments';

const ProductPageBody = ({product}) => {

    const {id, title, price, description, category, image} = product;

    const dispatch = useDispatch();

    const handleAddItemToBasket = () => {
        dispatch(manageItemsInBasket({type: 'ADD', payload: product}));
    }

    return(
        <StyledProductPageBody>
            <StyledLeftContainer>
                <StyledImg src={image} alt={title} />
            </StyledLeftContainer>
            <StyledRightContainer>
                <Price id={id} price={price} handleAddItemToBasket={handleAddItemToBasket} />
                <Payments />
                <Description description={description} />
                <Comments id={id} />
            </StyledRightContainer>
        </StyledProductPageBody>
    )
};

ProductPageBody.propTypes = {
    product: PropTypes.object
}

export default ProductPageBody;