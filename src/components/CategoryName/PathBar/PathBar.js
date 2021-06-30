import React from 'react';
import PropTypes from 'prop-types';

import { StyledPathBar, StyledLink } from './PathBar.styles';

const PathBar = ({category, productCategory}) => {
    return(
        <StyledPathBar>
            <StyledLink to="/" >Home</StyledLink> {productCategory ? <StyledLink to={`/category/${productCategory}`} >➤ {productCategory}</StyledLink> : null}  ➤ {category}
        </StyledPathBar>
    )
}

PathBar.propTypes = {
    category: PropTypes.string,
    productCategory: PropTypes.string
}

export default PathBar;