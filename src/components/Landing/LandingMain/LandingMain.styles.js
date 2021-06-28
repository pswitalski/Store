import styled from "styled-components";

import backgroundImg from 'assets/img/main.jpg'

export const StyledLandingMain = styled.div`
    grid-column: 1/3;
    grid-row: 1/3;
    background-image: url(${backgroundImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    z-index: -1;

    @media (max-width: 800px) {
        grid-row: 1/3;
    }
`;

export const StyledDiv = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: 48px;
    background-color: #fff;
    border-radius: 4px;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    width: 370px;
    height: 100px;

    @media (max-width: 800px) {
        width: 300px;
    }
`;

export const StyledH3 = styled.h3`
    text-transform: uppercase;
    margin: auto 24px;
    color: ${props => props.theme.colors.dark};
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-align: center;

    @media (max-width: 800px) {
        font-size: 18px;
    }
`;

export const StyledH4 = styled.h4`
    text-transform: uppercase;
    margin: auto;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.06em;
`;