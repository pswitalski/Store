import React, {useState, useEffect} from 'react';

import { useParams } from 'react-router';

import { Wrapper } from 'assets/styles/Wrapper';
import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator';
import ProductName from 'components/ProductName/ProductName';
import ProductPageBody from 'components/ProductPageBody/ProductPageBody';

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
        <div className="product-page" >
            <Wrapper>
                {isLoading ? <LoadingIndicator/> : null}
                {!isLoading ? <ProductName product={currentProduct} /> : null}
                {!isLoading ? <ProductPageBody product={currentProduct} /> : null}
            </Wrapper>
        </div>
    )
}

export default ProductPage;