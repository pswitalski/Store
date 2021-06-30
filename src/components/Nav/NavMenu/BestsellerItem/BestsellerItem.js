import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { StyledItem, StyledImg, StyledH2, StyledP, StyledImgContainer } from './BestsellerItem.styles';

import { getSingleItemFromApi } from 'helpers/getSingleItemFromApi';

const BestsellerItem = ({id}) => {

    const [itemData, setItemData] = useState({});

    const fetchData = async () => {
        const data = await getSingleItemFromApi(id);
        setItemData(data);
    }

    useEffect(() => {
        fetchData();
        console.log('useEffect')
    }, [])

    console.log(itemData);

    return(
        <StyledItem className="item">
            <StyledImgContainer>
                <StyledImg src={itemData.image} alt={itemData.title} />
            </StyledImgContainer>
            <StyledH2>{itemData.title}</StyledH2>
            <StyledP><span>$</span>{itemData.price}</StyledP>
        </StyledItem>
    )
}

BestsellerItem.propTypes = {
    id: PropTypes.number
}

export default BestsellerItem;