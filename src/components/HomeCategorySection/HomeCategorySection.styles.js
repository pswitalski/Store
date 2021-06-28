import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledHomeCategorySection = styled.section`
    margin-top: 96px;
    color: ${props => props.theme.colors.dark};
`;

export const StyledH2 = styled.h2`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 22px;
    letter-spacing: 0.06em;
    margin-bottom: 10px;
`;

export const StyledItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const StyledLink = styled(Link)`
    background-color: ${props => props.theme.colors.grWhite};
    color: ${props => props.theme.colors.dark};
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-decoration: none;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;

    &:hover {
        background-color: ${props => props.theme.colors.grey};
    }
`;