import styled from "styled-components";

export const StyledComment = styled.div`
    color: ${props => props.theme.colors.dark};
    font-size: 14px;
    line-height: 22px;
`;

export const StyledH4 = styled.h4`
    font-weight: 500;
    margin: 20px 0 10px;
    text-transform: capitalize;
    flex-basis: 80%;

    @media (max-width: 800px) {
        flex-basis: 70%;
    }
`;

export const StyledP = styled.p`
    font-weight: 400;
    opacity: 0.8;

    &::first-letter {
        text-transform: uppercase;
    }
`;

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;