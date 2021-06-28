import React from 'react';
import PropTypes from 'prop-types';

import { StyledSale, StyledContainer, StyledH3, StyledP, StyledSpan } from './Sale.styles';

const Sale = ({text, header, image, span}) => {
    return(
        <StyledSale image={image} >
            <StyledContainer>
                <StyledH3>{header}</StyledH3>
                <StyledP>{text}<StyledSpan> {span}</StyledSpan></StyledP>
            </StyledContainer>
        </StyledSale>
    )
}

Sale.propTypes = {
    text: PropTypes.string,
    header: PropTypes.string,
    image: PropTypes.string,
    span: PropTypes.string
}

export default Sale;