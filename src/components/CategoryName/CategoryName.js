import React from 'react';
import PropTypes from 'prop-types';

import { StyledCategoryName } from './CategoryName.styles';

import NameBar from './NameBar/NameBar';
import PathBar from './PathBar/PathBar';

const CategoryName = ({category}) => {
    return(
        <StyledCategoryName>
            <PathBar category={category} />
            <NameBar category={category}  />
        </StyledCategoryName>
    )
}

CategoryName.propTypes = {
    category: PropTypes.string
}

export default CategoryName;