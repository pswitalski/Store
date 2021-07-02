import React from 'react';
import PropTypes from 'prop-types'

import { StyledLandingCategory, StyledDiv, StyledH3, StyledLink } from './LandingCategory.styles';

const LandingCategory = ({row, column, name, image, link}) => {
    return(
        <StyledLandingCategory row={row} column={column} image={image} >
            <StyledLink to={`/category/${link}`}>
                <StyledDiv>
                    <StyledH3>{name}</StyledH3>
                </StyledDiv>
            </StyledLink>
        </StyledLandingCategory>
    )
}

LandingCategory.propTypes = {
    row: PropTypes.string,
    column: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string
}

export default LandingCategory;