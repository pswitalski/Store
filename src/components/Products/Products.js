import React from 'react';
import PropTypes from 'prop-types';

import { StyledProducts } from './Products.styles';

import ItemCard from 'components/ItemCard/ItemCard';

const Products = ({categoryData}) => {

    const createProducts = () => {
        const items = categoryData.map(item => <ItemCard item={item} key={item.id} />);
        return items;
    }

    return(
        <StyledProducts>
            {createProducts()}
        </StyledProducts>
    )
}

Products.propTypes = {
    categoryData: PropTypes.array
}

export default Products;