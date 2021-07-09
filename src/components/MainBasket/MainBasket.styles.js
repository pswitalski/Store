import styled from "styled-components";

export const StyledMainBasket = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 160px 160px auto;
    grid-gap: 20px;
    background-color: red;
    width: 100%;
    height: 600px;

    @media (max-width: 1200px) {
        grid-template-columns: 50px 1fr 50px;
    }

    @media (max-width: 800px) {
        grid-template-columns: 5px 1fr 5px;
    }
`;

export const StyledHeader = styled.header`
    background-color: blue;
    grid-column: 1/3;
    grid-row: 1/2;
    padding-top: 10px;

    @media (max-width: 1200px) {
        grid-column: 2/3;
    }
`;

export const StyledItemsContainer = styled.section`
    grid-column: 1/3;
    grid-row: 2/4;
    background-color: pink;

    @media (max-width: 1200px) {
        grid-column: 2/3;
    }
`;

export const StyledSummaryContainer = styled.section`
    grid-column: -1/-2;
    grid-row: 1/3;
    background-color: green;

    @media (max-width: 1200px) {
        grid-column: 2/3;
        grid-row: -1/-2;
    }
`;

export const StyledH1 = styled.h1``;

export const StyledButton = styled.button``;

export const StyledP = styled.p``;