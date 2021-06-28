import React from 'react';
import PropTypes from 'prop-types'

import { StyledLandingMain, StyledDiv, StyledH3, StyledH4 } from './LandingMain.styles';

const LandingMain = ({title, subtitle}) => {
    return(
        <StyledLandingMain>
            <StyledDiv>
                <StyledH4>{subtitle}</StyledH4>
                <StyledH3>{title}</StyledH3>
            </StyledDiv>
        </StyledLandingMain>
    )
}

LandingMain.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

export default LandingMain;