import React from 'react';
import PropTypes from 'prop-types';

import { StyledH1, StyledNavLink } from 'components/Nav/Logo/Logo.styles';

const Logo = ({name}) => (
    <StyledNavLink exact to="/">
        <StyledH1>{name}</StyledH1>
    </StyledNavLink>
)

Logo.propTypes = {
    name: PropTypes.string
}

export default Logo;