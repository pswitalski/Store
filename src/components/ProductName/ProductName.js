import React from 'react';
import PropTypes from 'prop-types';

import { StyledProductName } from './ProductName.styles';

import PathBar from 'components/CategoryName/PathBar/PathBar';
import NameBar from 'components/CategoryName/NameBar/NameBar';
import ProductInfo from './ProductInfo/ProductInfo';

const ProductName = ({product: {title, category, id}}) => {


    return(
        <StyledProductName>
            <PathBar category={title} productCategory={category} />
            <NameBar category={title}  />
            <ProductInfo id={id} />
        </StyledProductName>
    )
}

ProductName.propTypes = {
    product: PropTypes.object
}

export default ProductName;