import React from 'react';
import PropTypes from 'prop-types'

import { StyledButton } from './Button.styles';

const Button = ({text, onClick, disabled}) => {
    return(
        <StyledButton onClick={onClick} disabled={disabled} >
            {text}
        </StyledButton>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default Button;