import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

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
    }, [])

    const currency = useSelector(state => state.currency);
    const { currentCurrency, exchangeRate } = currency;

    const [calculatedPrice, setCalculatedPrice] = useState(itemData.price);

    useEffect(() => {
        switch(currentCurrency) {
            case 'pln':
                const plnPrice = itemData.price * exchangeRate.pln;
                setCalculatedPrice(plnPrice);
                break;
            case 'gbp':
                const gbpPrice = itemData.price * exchangeRate.gbp;
                setCalculatedPrice(gbpPrice);
                break;
            case 'eur':
                const eurPrice = itemData.price * exchangeRate.eur;
                setCalculatedPrice(eurPrice);
                break;
            default:
                setCalculatedPrice(itemData.price);
                break;
        }
    }, [currentCurrency, exchangeRate, itemData.price])

    return(
        <StyledItem className="item">
            <StyledImgContainer>
                <StyledImg src={itemData.image} alt={itemData.title} />
            </StyledImgContainer>
            <StyledH2>{itemData.title}</StyledH2>
            <StyledP><span>{exchangeRate.symbol ? exchangeRate.symbol : '$'}</span>{calculatedPrice ? calculatedPrice.toFixed(2) : 0.00}</StyledP>
        </StyledItem>
    )
}

BestsellerItem.propTypes = {
    id: PropTypes.number
}

export default BestsellerItem;