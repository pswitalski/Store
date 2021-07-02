import React from 'react';
import PropTypes from 'prop-types';

import { StyledModalButton } from './ModalButton.styles';

const ModalButton = ({text, isDark = false}) => {
    return(
        <StyledModalButton isDark={isDark} >
            {text}
        </StyledModalButton>
    )
}

ModalButton.propTypes = {
    text: PropTypes.string,
    isDark: PropTypes.bool
}

export default ModalButton;