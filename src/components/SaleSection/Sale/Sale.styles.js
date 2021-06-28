import styled from "styled-components";

export const StyledSale = styled.div`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 540px;
    height: 260px;
    margin: 48px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: ${props => props.theme.colors.dark};
    text-align: center;

    @media (max-width: 800px) {
        width: 90%;
    }
`;

export const StyledP = styled.p`
    letter-spacing: 0.06em;
    font-weight: 600;
    font: 16px;
`;

export const StyledH3 = styled.h3`
    letter-spacing: 0.06em;
    font-weight: 600;
    opacity: 0.6;
    font-size: 12px;
`;

export const StyledContainer = styled.div`
    height: 71px;
    width: 293px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const StyledSpan = styled.span`
    color: ${props => props.theme.colors.sale};
`;