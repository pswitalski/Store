import React from 'react';

import { StyledMiddleFooter, StyledContainer, StyledH3, StyledUl, StyledLi, StyledLink, StyledImg } from './MiddleFooter.styles';

import gpsImg from 'assets/icons/location-marker 1.png';
import mailImg from 'assets/icons/mail 1.png';
import phoneImg from 'assets/icons/phone 1.png';
import clockImg from 'assets/icons/clock 1.png';

const MiddleFooter = () => {
    return(
        <StyledMiddleFooter>
            <StyledContainer>
                <StyledH3>categories</StyledH3>
                <StyledUl>
                    <StyledLi>
                        <StyledLink to="/electronics">
                            electronics
                        </StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="/jewelery">
                            jewelery
                        </StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="/men's clothing">
                            men's clothing
                        </StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="/women's clothing">
                            women's clothing
                        </StyledLink>
                    </StyledLi>
                </StyledUl>
            </StyledContainer>
            <StyledContainer>
                <StyledH3>Contact us</StyledH3>
                <StyledUl>
                    <StyledLi>
                        <StyledImg src={gpsImg} alt="address" />Warsaw, Wiejska 4
                    </StyledLi>
                    <StyledLi>
                        <StyledImg src={phoneImg} alt="phone" />(48) 123 456 789
                    </StyledLi>
                    <StyledLi>
                        <StyledImg src={clockImg} alt="clock" />Monday to Friday 9/17
                    </StyledLi>
                    <StyledLi>
                        <StyledImg src={mailImg} alt="email" />store@store.com
                    </StyledLi>
                </StyledUl>
            </StyledContainer>
            <StyledContainer>
                <StyledH3>authors</StyledH3>
                <StyledUl>
                    <StyledLi>
                        created by Paweł Świtalski
                    </StyledLi>
                    <StyledLi>
                        designed by Oleh Chabanov
                    </StyledLi>
                </StyledUl>
            </StyledContainer>
        </StyledMiddleFooter>
    )
}

export default MiddleFooter;