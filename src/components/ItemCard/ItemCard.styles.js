import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledItemCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 378px;
    width: 255px;
    justify-content: flex-end;
    align-items: center;
    color: ${props => props.theme.colors.dark};
    position: relative;
    margin: 10px;
    grid-row: 1/-1;

    @media (max-width: 800px) {
        margin: 10px 0;
    }
`;

export const StyledH3 = styled.h3`
    font-size: 14px;
    opacity: 0.6;
    font-weight: 400;
`;

export const StyledImg = styled.img`
    max-height: 70%;
    max-width: 100%;
    margin: auto 0 120px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
`;

export const StyledP = styled.p`
    font-weight: 700;
    font-size: 14px;
`;

export const StyledDataContainer = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.white};
    z-index: 1;
    margin-top: 10px;
`;

export const StyledHoverContainer = styled.div`
    width: 100%;
    display: none;

    @media (max-width: 800px) {
        display: block;
    }

    ${StyledItemCard}:hover & {
        display: block;
    }
`;

export const StyledPriceGradeContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;