import React from 'react';
import PropTypes from 'prop-types'

import { StyledButton } from './Button.styles';

const Button = ({text, onClick}) => {
    return(
        <StyledButton onClick={onClick} >
            {text}
        </StyledButton>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;