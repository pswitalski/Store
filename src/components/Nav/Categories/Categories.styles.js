import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const StyledUl = styled.ul`
    display: flex;
    list-style: none;
    margin: auto 0;
    height: 100%;
    overflow: hidden;

    @media (max-width: 600px) {
        display: none;
    }
`;

export const StyledLi = styled.li`
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const StyledNavLink = styled(NavLink)`
    color: ${props => props.theme.colors.dark};
    text-decoration: none;
    padding: 0 12px;
    height: 100%;
    text-transform: capitalize;
    position: relative;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    &.active {
        font-weight: 600;
    }

    &.active::after {
        display: block;
        content: '';
        width: 20px;
        height: 20px;
        background-color: black;
        position: absolute;
        left: 50%;
        bottom: -12px;
        transform: translateX(-50%) rotate(45deg);
    }
`;