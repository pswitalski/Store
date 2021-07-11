import styled from "styled-components";

import closeImg from 'assets/icons/x 1.png';

import { Link } from "react-router-dom";

export const StyledAddedToCartModal = styled.div`
    position: fixed;
    top: 0;
    left: 0%;
    width: 100vw;
    height: 100vh;
    z-index: 2000;
    background-color: rgba(230, 230, 230, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const StyledModalBody = styled.div`
    background-color: ${props => props.theme.colors.white};
    width: 80%;
    max-width: 500px;
    height: 350px;
    position: relative;
    z-index: 2001;
    color: ${props => props.theme.colors.dark};
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    background-image: url(${closeImg});
    background-position: center;
    background-repeat: no-repeat;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const StyledH1 = styled.h1`
    font-weight: 600;
    font-size: 26px;
    letter-spacing: 0.06em;
    text-align: center;
    margin: 20px;
`;

export const StyledLink = styled(Link)``;