import React from 'react';
import PropTypes from 'prop-types';

import { StyledDiv, StyledP } from 'components/Nav/Controls/ControlButton/ButtonCounter/ButtonCounter.styles';

const ButtonCounter = ({value}) => (
    <StyledDiv>
        <StyledP>{value}</StyledP>
    </StyledDiv>
)

ButtonCounter.propTypes = {
    value: PropTypes.number
}

export default ButtonCounter;