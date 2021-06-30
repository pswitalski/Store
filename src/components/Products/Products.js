import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import { StyledProducts } from './Products.styles';

import { getItemsFromCategory } from 'helpers/getItemsFromCategory';

import ItemCard from 'components/ItemCard/ItemCard';

const Products = ({category}) => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await getItemsFromCategory(category);
        setData(response);
    }

    useEffect(() => {
        fetchData();
        console.log('Products - useEffect')
    }, []);

    const createProducts = () => {
        const items = data.map(item => <ItemCard item={item} key={item.id} />);
        return items;
    }

    return(
        <StyledProducts>
            {createProducts()}
        </StyledProducts>
    )
}

Products.propTypes = {
    category: PropTypes.string
}

export default Products;