import React from 'react';
import PropTypes from 'prop-types';

import { StyledModalHeader, StyledButton, StyledH2 } from './ModalHeader.styles';

import closeImg from 'assets/icons/x 1.png';

const ModalHeader = ({text, close}) => {
    return(
        <StyledModalHeader>
            <StyledH2>{text}</StyledH2>
            <StyledButton onClick={close} >
                <img src={closeImg} alt="close" />
            </StyledButton>
        </StyledModalHeader>
    )
}

ModalHeader.propTypes = {
    text: PropTypes.string,
    close: PropTypes.func
}

export default ModalHeader;