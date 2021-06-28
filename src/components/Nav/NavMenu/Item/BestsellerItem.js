import React from 'react';
import PropTypes from 'prop-types';

import { StyledItem, StyledImg, StyledH2, StyledP, StyledImgContainer } from './BestsellerItem.styles';

const BestsellerItem = ({img, name, price}) => {
    return(
        <StyledItem className="item">
            <StyledImgContainer>
                <StyledImg src={img} alt={name} />
            </StyledImgContainer>
            <StyledH2>{name}</StyledH2>
            <StyledP><span>$</span>{price}</StyledP>
        </StyledItem>
    )
}

BestsellerItem.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number
}

export default BestsellerItem;