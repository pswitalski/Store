import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { addElectronics, addJewelery, addMensClothing, addWomensClothing } from 'features/items/itemsSlice';

import { StyledHomeCategorySection, StyledH2, StyledItemsContainer, StyledLink } from './HomeCategorySection.styles';

import { getItemsFromCategory } from 'helpers/getItemsFromCategory';

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

    return(
        <StyledHomeCategorySection>
            <StyledH2>{category}</StyledH2>
            <StyledItemsContainer>
                {error !== '' ? <p>{error}</p>: null}
            </StyledItemsContainer>
            <StyledLink to={`/${category}`} >see all</StyledLink>
        </StyledHomeCategorySection>
    )
}

HomeCategorySeciton.propTypes = {
    category: PropTypes.string
}

export default HomeCategorySeciton;