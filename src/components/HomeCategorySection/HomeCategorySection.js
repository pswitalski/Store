import React from 'react';
import PropTypes from 'prop-types';

import { StyledHomeCategorySection, StyledH2, StyledItemsContainer, StyledLink } from './HomeCategorySection.styles';

const HomeCategorySeciton = ({category}) => {
    return(
        <StyledHomeCategorySection>
            <StyledH2>{category}</StyledH2>
            <StyledItemsContainer>

            </StyledItemsContainer>
            <StyledLink to={`/${category}`} >see all</StyledLink>
        </StyledHomeCategorySection>
    )
}

HomeCategorySeciton.propTypes = {
    category: PropTypes.string
}

export default HomeCategorySeciton;