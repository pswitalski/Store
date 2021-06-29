import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledMiddleFooter = styled.div`
    flex-grow: 2;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const StyledContainer = styled.div`
    height: 70%;

    @media (max-width: 600px) {
        margin: 10px 0;
        text-align: center;
    }
`;

export const StyledH3 = styled.h3`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    line-height: 13px;
    letter-spacing: 0.06em;
`;

export const StyledUl = styled.ul`
    list-style: none;
`;

export const StyledLi = styled.li`
    font-weight: 400;
    font-size: 13px;
    line-height: 34px;
    opacity: 0.8;
    display: flex;
    align-items: center;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const StyledImg = styled.img`
    height: 20px;
    width: auto;
    margin: 5px;
`;