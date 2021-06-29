import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const StyledUl = styled.ul`
    display: flex;
    list-style: none;
    margin: auto 0;
    height: 100%;
    overflow: hidden;

    @media (max-width: 800px) {
        display: none;
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        background-color: ${props => props.theme.colors.white};
        z-index: 100;

        &.menuActive {
            display: flex;
        }
    }
`;

export const StyledLi = styled.li`
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 800px) {
        height: 10%;
    }
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

    @media (max-width: 800px) {
        width: 100%;
    }

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

        @media (max-width: 800px) {
            display: none;
        }
    }
`;

export const StyledCloseButton = styled.button`
    position: absolute;
    top: 30px;
    right: 10px;
    background-color: transparent;
    width: 50px;
    height: 50px;
    border: none;
    display: none;

    @media (max-width: 800px) {
        display: block;
    }
`;