import React from 'react';
import PropTypes from 'prop-types';

import ButtonCounter from './ButtonCounter/ButtonCounter';

import { StyledButton } from './ControlButton.styles';

const ControlButton = ({icon, alt, counter, mobile, onClick}) => (
    <StyledButton className={mobile ? 'mobile' : ''} onClick={onClick} >
        <img src={icon} alt={alt} />
        {counter ? <ButtonCounter value={counter} /> : ''}
    </StyledButton>
)

ControlButton.propTypes = {
    icon: PropTypes.string,
    alt: PropTypes.string,
    counter: PropTypes.number,
    mobile: PropTypes.bool,
    onClick: PropTypes.func
}

export default ControlButton;