import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const StyledH1 = styled.h1`
    font-family: ${props => props.theme.logoFontFamily};
    font-weight: 700;
    font-size: 36px;
    line-height: 36px;
    margin: auto 0;
    display: flex;
    align-content: center;
    justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${props => props.theme.colors.dark};
    display: flex;
    align-content: center;
    justify-content: center;
`;