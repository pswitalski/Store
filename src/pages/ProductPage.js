import React, {useState, useEffect} from 'react';

import { useParams } from 'react-router';

import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator';
import ProductName from 'components/ProductName/ProductName';

import { getSingleItemFromApi } from 'helpers/getSingleItemFromApi';

const ProductPage = () => {

    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({});

    const fetchData = async () => {
        setIsLoading(true);
        const response = await getSingleItemFromApi(id);
        setCurrentProduct(response);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <div>
            product page
            {isLoading ? <LoadingIndicator/> : null}
            <ProductName product={currentProduct} />
        </div>
    )
}

export default ProductPage;