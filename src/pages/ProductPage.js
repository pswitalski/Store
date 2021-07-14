import React, {useState, useEffect} from 'react';

import { useParams } from 'react-router';

import { Wrapper } from 'assets/styles/Wrapper';
import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator';
import ProductName from 'components/ProductName/ProductName';
import ProductPageBody from 'components/ProductPageBody/ProductPageBody';
import RelatedProducts from 'components/RelatedProducts/RelatedProducts';

import { getSingleItemFromApi } from 'helpers/getSingleItemFromApi';

import { useCloseModals } from 'hooks/useCloseModals';

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
    }, [id])

    const closeAllModals = useCloseModals();

    return(
        <div className="product-page" onClick={closeAllModals} >
            <Wrapper>
                {isLoading ? <LoadingIndicator /> : null}
                {!isLoading ? <ProductName product={currentProduct} /> : null}
                {!isLoading ? <ProductPageBody product={currentProduct} /> : null}
                {!isLoading ? <RelatedProducts category={currentProduct.category} /> : null}
            </Wrapper>
        </div>
    )
}

export default ProductPage;