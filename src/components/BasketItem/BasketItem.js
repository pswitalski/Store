import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { manageItemsInBasket } from 'features/basket/basketSlice';

import { StyledBasketItem, StyledDataContainer, StyledImageContainer, StyledImg, StyledCategory, StyledName, StyledControls, StyledLink } from './BasketItem.styles';

import BasketCounter from './BasketCounter/BasketCounter';
import BasketPrice from './BasketPrice/BasketPrice';
import BasketDeleteButton from './BasketDeleteButton/BasketDeleteButton';

const BasketItem = ({quantity, product: {id, title, price, description, category, image}, noControls, checkout}) => {

    const currentCurrency = useSelector(state => state.currency.currentCurrency);
    const exchangeRate = useSelector(state => state.currency.exchangeRate);

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
    }, [currentCurrency, exchangeRate, currencySymbol, calculatedPrice, price]);

    const dispatch = useDispatch();

    const handleDeleteItem = () => {
        dispatch(manageItemsInBasket({
            type: 'DELETE',
            payload: {
                id: id
            }
        }))
    }

    const hadleIncrementQuantity = () => {
        dispatch(manageItemsInBasket({
            type: 'INCREMENT',
            payload: {
                id: id
            }
        }))
    }

    const hadleDecrementQuantity = () => {
        dispatch(manageItemsInBasket({
            type: 'DECREMENT',
            payload: {
                id: id
            }
        }))
    }

    return(
        <StyledBasketItem className={noControls ? 'disabled' : ''} >
            <StyledImageContainer>
                <StyledImg src={image} alt={title} />
            </StyledImageContainer>
            <StyledDataContainer>
                <StyledName><StyledLink to={`/product/${id}`} >{title}</StyledLink></StyledName>
                <StyledCategory>{category}</StyledCategory>
                <StyledControls className={noControls ? 'disabled' : ''} >
                    <BasketCounter value={quantity} increment={hadleIncrementQuantity} decrement={hadleDecrementQuantity} checkout={checkout} />
                    <BasketPrice price={calculatedPrice} currency={currencySymbol} />
                    {!checkout ? <BasketDeleteButton onClick={handleDeleteItem}  /> : null}
                </StyledControls>
            </StyledDataContainer>
        </StyledBasketItem>
    )
};

BasketItem.propTypes = {
    product: PropTypes.object,
    quantity: PropTypes.number,
    noControls: PropTypes.bool,
    checkout: PropTypes.bool
}

export default BasketItem;