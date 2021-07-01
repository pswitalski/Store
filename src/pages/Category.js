import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';

import { getItemsFromCategory } from 'helpers/getItemsFromCategory';
import { Wrapper } from 'assets/styles/Wrapper';

import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator';
import CategoryName from 'components/CategoryName/CategoryName';
import Products from 'components/Products/Products';

const Category = () => {

    const { category } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [categoryData, setCategoryData] = useState([]);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await getItemsFromCategory(category);
        setCategoryData(response);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [category])

    return(
        <div className="category" >
            <Wrapper>
                {isLoading ? <LoadingIndicator /> : null}
                {!isLoading ?<CategoryName category={category} /> : null}
                {!isLoading ? <Products categoryData={categoryData} /> : null}
            </Wrapper>
        </div>
    )
}

export default Category;