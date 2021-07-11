import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledMainBasket = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 80px 160px minmax(200px, auto);
    grid-gap: 20px;
    width: 100%;
    height: fit-content;

    @media (max-width: 1200px) {
        grid-template-columns: 50px 1fr 50px;
        grid-template-rows: 80px minmax(200px, auto) 200px;
    }

    @media (max-width: 800px) {
        grid-template-columns: 5px 1fr 5px;
    }
`;

export const StyledHeader = styled.header`
    grid-column: 1/3;
    grid-row: 1/2;
    padding: 20px;

    @media (max-width: 1200px) {
        grid-column: 2/3;
    }
`;

export const StyledItemsContainer = styled.section`
    grid-column: 1/3;
    grid-row: 2/4;
    padding: 20px;
    height: auto;

    @media (max-width: 1200px) {
        grid-column: 2/3;
        grid-row: 2/3;
    }
`;

export const StyledSummaryContainer = styled.section`
    grid-column: -1/-2;
    grid-row: 1/3;
    padding: 20px;

    @media (max-width: 1200px) {
        grid-column: 2/3;
        grid-row: -1/-2;
    }
`;

export const StyledH1 = styled.h1`
    color: ${props => props.theme.colors.dark};
    margin-bottom: 10px;
`;

export const StyledButton = styled.button``;

export const StyledP = styled.p`
    color: ${props => props.theme.colors.dark};
    line-height: 26px;
`;

export const StyledSpan = styled.span`
    font-weight: 700;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit
`;