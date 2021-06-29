import styled from "styled-components";

export const StyledBottomFooter = styled.div`
    height: 40px;
    background-color: ${props => props.theme.colors.grWhite};
    display: flex;
    align-content: center;
    justify-content: space-around;

    @media (max-width: 600px) {
        flex-direction: column;
        height: fit-content;
    }
`;

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
        margin: 10px;
    }
`;

export const StyledP = styled.p`
    color: ${props => props.theme.colors.dark};
    font-size: 11px;
    line-height: 22px;
    font-weight: 500;
    opacity: 0.8;
`;

export const StyledImg = styled.img`
    margin: 0 10px;
    height: 30%;
`;