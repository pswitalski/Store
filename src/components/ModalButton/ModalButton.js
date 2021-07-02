import React from 'react';
import PropTypes from 'prop-types';

import { StyledModalButton } from './ModalButton.styles';

const ModalButton = ({text, isDark = false, onClick}) => {
    return(
        <StyledModalButton isDark={isDark} onClick={onClick} >
            {text}
        </StyledModalButton>
    )
}

ModalButton.propTypes = {
    text: PropTypes.string,
    isDark: PropTypes.bool,
    onClick: PropTypes.func
}

export default ModalButton;