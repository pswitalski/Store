import React from 'react';
import PropTypes from 'prop-types';

import { StyledH1 } from 'components/Nav/Logo/Logo.styles';

const Logo = ({name}) => (
    <StyledH1>{name}</StyledH1>
)

Logo.propTypes = {
    name: PropTypes.string
}

export default Logo;