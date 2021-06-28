import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { addElectronics, addJewelery, addMensClothing, addWomensClothing } from 'features/items/itemsSlice';

import { StyledHomeCategorySection, StyledH2, StyledItemsContainer, StyledLink } from './HomeCategorySection.styles';

import { getItemsFromCategory } from 'helpers/getItemsFromCategory';

import ItemCard from 'components/ItemCard/ItemCard';

const HomeCategorySeciton = ({category}) => {

    const dispatch = useDispatch();

    const fetched = useRef({
        fetched: false
    })

    const [error, setError] = useState('');

    useEffect(() => {

        const fetchFromApi = async () => {
            const items = await getItemsFromCategory(category);

            if (typeof(items) === String) {
                setError(items);
                return;
            }

            switch(category) {
                case 'electronics':
                    dispatch(addElectronics(items));
                    fetched.current = true
                    break;
                case 'jewelery':
                    dispatch(addJewelery(items));
                    fetched.current = true
                    break;
                case "women's clothing":
                    dispatch(addWomensClothing(items));
                    fetched.current = true
                    break;
                case "men's clothing":
                    dispatch(addMensClothing(items));
                    fetched.current = true
                    break;
                default:
                    return;
            }

        }

        if (!fetched.current.fetched){
            fetchFromApi();
        }

    }, [])

    const items = useSelector(state => state.items);

    const createItemsCards = () => {
        const itemsData = [];

        switch(category) {
            case 'electronics':
                itemsData.push(...items.items.electronics);
                break;
            case 'jewelery':
                itemsData.push(...items.items.jewelery);
                break;
            case "women's clothing":
                itemsData.push(...items.items.womensClothing)
                break;
            case "men's clothing":
                itemsData.push(...items.items.mensClothing)
                break;
            default:
                return;
        }

        itemsData.length = 3;

        const itemsCards = itemsData.map(item => (
            <ItemCard item={item} key={item.id} />
        ))

        return itemsCards;
    }

    return(
        <StyledHomeCategorySection>
            <StyledH2>{category}</StyledH2>
            <StyledItemsContainer>
                {error !== '' ? <p>{error}</p>: null}
                {createItemsCards()}
            </StyledItemsContainer>
            <StyledLink to={`/${category}`} >see all</StyledLink>
        </StyledHomeCategorySection>
    )
}

HomeCategorySeciton.propTypes = {
    category: PropTypes.string
}

export default HomeCategorySeciton;