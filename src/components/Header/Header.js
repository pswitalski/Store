import React from 'react';

import InfoItem from 'components/Header/InfoItem/InfoItem';
import SocialMediaLink from './SocialMediaLink/SocialMediaLink';

import { Wrapper } from 'assets/styles/Wrapper';
import { StyledHeader, StyledDiv, StyledList } from 'components/Header/Header.styles';

import phone from 'assets/icons/phone 2.png';
import gps from 'assets/icons/location-marker 2.png';
import clock from 'assets/icons/clock 2.png';
import facebook from 'assets/icons/facebook 1.png';
import twitter from 'assets/icons/logo-twitter 1.png';
import instagram from 'assets/icons/instagram 1.png';
import pinterest from 'assets/icons/logo-pinterest 1.png';


const Header = () => (
    <StyledHeader data-testid="header" >
        <Wrapper>
            <StyledDiv>
                <StyledList>
                    <InfoItem content="(48) 123 456 789" icon={phone} alt="phone" />
                    <InfoItem content="Warsaw, Wiejska 4" icon={gps} alt="address" />
                    <InfoItem content="Monday to Friday 9/17" icon={clock} alt="clock" />
                </StyledList>
                <StyledList>
                    <SocialMediaLink icon={facebook} alt="facebook" url="https://www.facebook.com/" />
                    <SocialMediaLink icon={twitter} alt="twitter" url="https://twitter.com/" />
                    <SocialMediaLink icon={instagram} alt="instagram" url="https://www.instagram.com/" />
                    <SocialMediaLink icon={pinterest} alt="pinterest" url="https://www.pinterest.com/" />
                </StyledList>
            </StyledDiv>
        </Wrapper>
    </StyledHeader>
)

export default Header;