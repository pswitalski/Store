import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { manageItemsInBasket } from 'features/basket/basketSlice';

import { StyledItemCard, StyledH3, StyledImg, StyledP, StyledHoverContainer, StyledDataContainer, StyledPriceGradeContainer, StyledLink } from './ItemCard.styles';

import Grade from './Grade/Grade';
import Button from './Button/Button';

const ItemCard = ({item}) => {

    const {image, title, price = 0, description, id, category} = item;

    const [grade, setGrade] = useState(5);

    useEffect(() => {
        const grade = Math.floor(Math.random() * 5) + 1;
        setGrade(grade);
    }, [grade])

    const currency = useSelector(state => state.currency);
    const { currentCurrency, exchangeRate } = currency;

    const [calculatedPrice, setCalculatedPrice] = useState(price);

    useEffect(() => {
        switch(currentCurrency) {
            case 'pln':
                const plnPrice = price * exchangeRate.pln;
                setCalculatedPrice(plnPrice);
                break;
            case 'gbp':
                const gbpPrice = price * exchangeRate.gbp;
                setCalculatedPrice(gbpPrice);
                break;
            case 'eur':
                const eurPrice = price * exchangeRate.eur;
                setCalculatedPrice(eurPrice);
                break;
            default:
                setCalculatedPrice(price);
                break;
        }
    }, [currentCurrency, exchangeRate, price]);

    const dispatch = useDispatch();

    const handleAddItemToBasket = () => {
        dispatch(manageItemsInBasket({payload: item, type: 'ADD'}));
    }

    return(
        <StyledItemCard className={`item-id=${id}`} >
            <StyledLink to={`/product/${id}`}>
                <StyledImg src={image} alt={title} />
                <StyledDataContainer>
                    <StyledH3>{title}</StyledH3>
                    <StyledPriceGradeContainer>
                        <StyledP>{exchangeRate.symbol ? exchangeRate.symbol : '$'}  {calculatedPrice.toFixed(2)}</StyledP>
                        <Grade grade={grade} />
                    </StyledPriceGradeContainer>
                </StyledDataContainer>
            </StyledLink>
            <StyledHoverContainer>
                <Button text="add to card" onClick={handleAddItemToBasket} />
            </StyledHoverContainer>
        </StyledItemCard>
    )
}

ItemCard.propTypes = {
    item: PropTypes.object
}

export default ItemCard;