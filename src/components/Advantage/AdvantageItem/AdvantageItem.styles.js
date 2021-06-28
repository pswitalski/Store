import styled from "styled-components";

export const StyledAdvantageItem = styled.div`
    display: flex;

    @media (max-width: 600px) {
        margin-top: 10px;
        text-align: center;
    }
`;

export const StyledImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

export const StyledTextContainer = styled.div``;

export const StyledH3 = styled.h3`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.06em;
`;

export const StyledP = styled.p`
    font-weight: 500;
    font-size: 12px;
    opacity: 0.9;
`;

export const StyledImg = styled.img`
    height: 20px;
`;