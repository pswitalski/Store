import React from 'react';
import PropTypes from 'prop-types';

import { StyledDescription, StyledP, StyledH3 } from './Description.styles';

const Description = ({description}) => {
    return(
        <StyledDescription>
            <StyledH3>
                description
            </StyledH3>
            <StyledP>
                {description}
            </StyledP>
        </StyledDescription>
    )
}

Description.propTypes = {
    description: PropTypes.string
}

export default Description;