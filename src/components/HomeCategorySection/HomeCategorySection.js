import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { addElectronics, addJewelery, addMensClothing, addWomensClothing } from 'features/items/itemsSlice';

import { StyledHomeCategorySection, StyledH2, StyledItemsContainer, StyledLink } from './HomeCategorySection.styles';

import { getItemsFromCategory } from 'helpers/getItemsFromCategory';

const HomeCategorySeciton = ({category}) => {
    console.log(category)
    const dispatch = useDispatch();

    const [error, setError] = useState('');

    useEffect(() => {

        const fetchFromApi = async () => {
            const items = await getItemsFromCategory(category);

            if (typeof(items) === String) {
                setError(items);
                return;
            }
            console.log(typeof(category))
            switch(category) {
                case 'electronics':
                    dispatch(addElectronics(items));
                    break;
                case 'jewelery':
                    dispatch(addJewelery(items));
                    break;
                case "women's clothing":
                    dispatch(addWomensClothing(items));
                    break;
                case "men's clothing":
                    dispatch(addMensClothing(items));
                    break;
                default:
                    return;
            }

        }
        fetchFromApi();

    })

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