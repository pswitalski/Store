import styled from "styled-components";

import { Link } from "react-router-dom";

import { StyledNav } from "../Nav.styles";

export const StyledNavMenu = styled.nav`
    background-color: ${props => props.theme.colors.white};
    display: none;
    height: 336px;
    z-index: 120;

    ${ StyledNav }:hover & {
        display: block;

        @media (max-width: 800px) {
            display: none;
        }
    }
`;

export const StyledNavMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const StyledH1 = styled.h1`
    text-transform: uppercase;
    color: ${props => props.theme.colors.dark};
    padding: 10px;
    text-align: center;
`;

export const StyledItemsContainer = styled.div`
    width: auto;
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;