import React from 'react';
import PropTypes from 'prop-types';

import { StyledAdvantageItem, StyledImgContainer, StyledTextContainer, StyledH3, StyledP, StyledImg } from './AdvantageItem.styles';

const AdvantageItem = ({img, header, content}) => {
    return(
        <StyledAdvantageItem>
            <StyledImgContainer>
                <StyledImg src={img} alt={header} />
            </StyledImgContainer>
            <StyledTextContainer>
                <StyledH3>{header}</StyledH3>
                <StyledP>{content}</StyledP>
            </StyledTextContainer>
        </StyledAdvantageItem>
    )
}

AdvantageItem.propTypes = {
    img: PropTypes.string,
    header: PropTypes.string,
    content: PropTypes.string,
}

export default AdvantageItem;