import React from 'react';
import PropTypes from 'prop-types';

import { StyledA, StyledImg } from 'components/Header/SocialMediaLink/SocialMediaLink.styles';

const SocialMediaLink = ({icon, alt, url}) => (
    <StyledA href={url}>
        <StyledImg src={icon} alt={alt} />
    </StyledA>
);

SocialMediaLink.propTypes = {
    icon: PropTypes.string,
    alt: PropTypes.string,
    url: PropTypes.string
}

export default SocialMediaLink;