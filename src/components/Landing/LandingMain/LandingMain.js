import React from 'react';
import PropTypes from 'prop-types'

import { StyledLandingMain, StyledDiv, StyledH1, StyledH2 } from './LandingMain.styles';

const LandingMain = ({title, subtitle}) => {
    return(
        <StyledLandingMain>
            <StyledDiv>
                <StyledH1>{subtitle}</StyledH1>
                <StyledH2>{title}</StyledH2>
            </StyledDiv>
        </StyledLandingMain>
    )
}

LandingMain.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

export default LandingMain;