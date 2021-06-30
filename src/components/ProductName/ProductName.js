import React from 'react';
import PropTypes from 'prop-types';

import { StyledProductName } from './ProductName.styles';

import PathBar from 'components/CategoryName/PathBar/PathBar';
import NameBar from 'components/CategoryName/NameBar/NameBar';

const ProductName = ({product: {title, category}}) => {


    return(
        <StyledProductName>

            {category}
            <PathBar category={title} productCategory={category} />
            <NameBar category={title}  />
            {/* third bar with counter and grade */}
        </StyledProductName>
    )
}

ProductName.propTypes = {
    product: PropTypes.object
}

export default ProductName;