import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledLandingCategory = styled.div`
    grid-row: ${props => props.row};
    grid-column: ${props => props.column};
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
        grid-column: 1/-1;
        grid-row: auto;
    }
`;

export const StyledDiv = styled.div`
    width: fit-content;
    height: 48px;
    background-color: #fff;
    border-radius: 4px;
    display: flex;
    align-content: center;
    justify-content: center;
    margin: 0 auto;
`;

export const StyledH3 = styled.h3`
    text-transform: uppercase;
    margin: auto 24px;
    color: ${props => props.theme.colors.dark};
    font-size: ${props => props.theme.fontSize.title14_22};
    font-weight: ${props => props.theme.fontWeight.title14_22};
    letter-spacing: 0.06em;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;