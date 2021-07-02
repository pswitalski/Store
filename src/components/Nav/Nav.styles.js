import styled from "styled-components";

export const StyledNav = styled.nav`
    width: 100%;
    height: 66px;
    color: ${props => props.theme.colors.dark};
    background-color: ${props => props.theme.colors.white};
    position: absolute;
    top: 24px;
    left: 0;
    z-index: 100;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        display: block;
        background-color: ${props => props.theme.colors.grWhite};
        width: 100%;
        height: 2px;
    }

    &:hover::after {
        @media (min-width: 801px) {
            background-color: ${props => props.theme.colors.dark};
        }
    }
`;

export const StyledDiv = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
`;