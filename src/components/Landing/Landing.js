import React from 'react';

import { StyledLanding } from './Landing.styles';

import LandingMain from './LandingMain/LandingMain';
import LandingCategory from './LandingCategory/LandingCategory';

import womenImg from 'assets/img/women.jpg';
import menImg from 'assets/img/men.jpg';
import electronicsImg from 'assets/img/electronics.jpg';

const Landing = () => {
    return(
        <StyledLanding>
            <LandingMain title="Your favourite shop" subtitle="StoRe" />
            <LandingCategory name="women" image={womenImg} link="women's clothing" />
            <LandingCategory name="men" image={menImg} link="men's clothing" />
            <LandingCategory name="electronics" image={electronicsImg} column="-1/-3" link="electronics" />
        </StyledLanding>
    )
}

export default Landing;