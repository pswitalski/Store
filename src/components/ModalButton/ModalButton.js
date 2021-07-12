import React from 'react';
import PropTypes from 'prop-types';

import { StyledModalButton } from './ModalButton.styles';

const ModalButton = ({text, isDark = false, onClick, disabled}) => {
    return(
        <StyledModalButton isDark={isDark} onClick={onClick} disabled={disabled} >
            {text}
        </StyledModalButton>
    )
}

ModalButton.propTypes = {
    text: PropTypes.string,
    isDark: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default ModalButton;