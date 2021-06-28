import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledItemCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 378px;
    width: 255px;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.colors.dark};
`;

export const StyledH3 = styled.h3`
    font-size: 14px;
    opacity: 0.6;
    font-weight: 400;
`;

export const StyledImg = styled.img`
    max-height: 70%;
    max-width: 100%;
    margin: auto 0;
`;

export const StyledP = styled.p`
    font-weight: 700;
    font-size: 14px;
`;

export const StyledDataContainer = styled.div`
    width: 100%;
`;

export const StyledHoverContainer = styled.div``;

export const StyledPriceGradeContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;