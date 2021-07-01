import styled from "styled-components";

export const StyledProductPageBody = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const StyledLeftContainer = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const StyledRightContainer = styled.div`
    flex-basis: 50%;
`;

export const StyledImg = styled.img`
    max-height: 560px;
    max-width: 450px;

    @media (max-width: 800px) {
        max-width: 100%;
    }
`;