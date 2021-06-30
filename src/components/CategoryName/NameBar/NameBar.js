import React from 'react';
import PropTypes from 'prop-types'

import { StyledNameBar } from './NameBar.styles';

const NameBar = ({category}) => {
    return(
        <StyledNameBar>
            {category}
        </StyledNameBar>
    )
}

NameBar.propTypes = {
    category: PropTypes.string
}

export default NameBar;