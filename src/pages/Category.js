import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';

import { getItemsFromCategory } from 'helpers/getItemsFromCategory';
import { Wrapper } from 'assets/styles/Wrapper';

import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator';

const Category = () => {

    const { category } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [categoryData, setCategoryData] = useState({});

    const fetchData = async () => {
        const response = await getItemsFromCategory(category);
        setCategoryData(response);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <div className="category" >
            <Wrapper>
                <LoadingIndicator />

            </Wrapper>
        </div>
    )
}

export default Category;