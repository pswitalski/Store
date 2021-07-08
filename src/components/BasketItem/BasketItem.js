import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { manageItemsInBasket } from 'features/basket/basketSlice';

import { StyledBasketItem, StyledDataContainer, StyledImageContainer, StyledImg, StyledCategory, StyledName, StyledControls } from './BasketItem.styles';

import BasketCounter from './BasketCounter/BasketCounter';
import BasketPrice from './BasketPrice/BasketPrice';
import BasketDeleteButton from './BasketDeleteButton/BasketDeleteButton';

const BasketItem = ({quantity, product: {id, title, price, description, category, image}}) => {

    const currentCurrency = useSelector(state => state.currency.currentCurrency);
    const exchangeRate = useSelector(state => state.currency.exchangeRate);
    console.log(exchangeRate)

    const [currencySymbol, setCurrencySymbol] = useState('$');
    const [calculatedPrice, setCalculatedPrice] = useState(0);

    useEffect(() => {
        switch(currentCurrency) {
            case 'eur':
                setCurrencySymbol('€');
                setCalculatedPrice(price * exchangeRate.eur);
                break;
            case 'pln':
                setCurrencySymbol('PLN');
                setCalculatedPrice(price * exchangeRate.pln);
                break;
            case 'gbp':
                setCurrencySymbol('£');
                setCalculatedPrice(price * exchangeRate.gbp);
                break;
            default:
                setCurrencySymbol('$');
                setCalculatedPrice(price);
                break;
        }
    }, [currentCurrency]);

    const dispatch = useDispatch();

    const handleDeleteItem = () => {
        dispatch(manageItemsInBasket({
            type: 'DELETE',
            payload: {
                id: id
            }
        }))
    }

    return(
        <StyledBasketItem>
            <StyledImageContainer>
                <StyledImg src={image} alt={title} />
            </StyledImageContainer>
            <StyledDataContainer>
                <StyledName>{title}</StyledName>
                <StyledCategory>{category}</StyledCategory>
                <StyledControls>
                    <BasketCounter value={quantity} />
                    <BasketPrice price={calculatedPrice} currency={currencySymbol} />
                    <BasketDeleteButton onClick={handleDeleteItem} />
                </StyledControls>
            </StyledDataContainer>
        </StyledBasketItem>
    )
};

BasketItem.propTypes = {
    product: PropTypes.object,
    quantity: PropTypes.number
}

export default BasketItem;