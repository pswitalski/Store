import React from 'react';
import PropTypes from 'prop-types'

import { StyledListItem, StyledImg, StyledP } from 'components/Header/InfoItem/InfoItem.styles';

const InfoItem = ({content, icon, alt}) => (
    <StyledListItem>
        <StyledImg src={icon} alt={alt} />
        <StyledP>{content}</StyledP>
    </StyledListItem>
)

InfoItem.propTypes = {
    content: PropTypes.string,
    icon: PropTypes.string,
    alt: PropTypes.string
}

export default InfoItem;