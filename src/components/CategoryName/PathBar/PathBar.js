import React from 'react';
import PropTypes from 'prop-types';

import { StyledPathBar, StyledLink } from './PathBar.styles';

const PathBar = ({category}) => {
    return(
        <StyledPathBar>
            <StyledLink to="/" >Home</StyledLink> ➤ {category}
        </StyledPathBar>
    )
}

PathBar.propTypes = {
    category: PropTypes.string
}

export default PathBar;