import React from 'react';

import { StyledAdvantage } from './Advantage.styles';

import AdvantageItem from './AdvantageItem/AdvantageItem';

import truckImg from 'assets/icons/truck 1.png';
import refreshImg from 'assets/icons/refresh 1.png';
import supportImg from 'assets/icons/support 1.png';

const Advantage = () => {
    return(
        <StyledAdvantage>
            <AdvantageItem header='free shiping' content='On every order.' img={truckImg} />
            <AdvantageItem header='30 days return' content='Simply return it within 30 days for an exchange.' img={refreshImg} />
            <AdvantageItem header='support 24/7' content='Contact us 24 hours a day, 7 days a week.' img={supportImg} />
        </StyledAdvantage>
    )
}

export default Advantage;