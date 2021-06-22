import React from 'react';
import PropTypes from 'prop-types';

import ButtonCounter from './ButtonCounter/ButtonCounter';

import { StyledButton } from './ControlButton.styles';

const ControlButton = ({icon, alt, counter}) => (
    <StyledButton>
        <img src={icon} alt={alt} />
        {counter ? <ButtonCounter value={counter} /> : ''}
    </StyledButton>
)

ControlButton.propTypes = {
    icon: PropTypes.string,
    alt: PropTypes.string,
    counter: PropTypes.number
}

export default ControlButton;