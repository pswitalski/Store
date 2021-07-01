import styled from "styled-components";

export const StyledRelatedProducts = styled.div`

`;

export const StyledH2 = styled.h2`
    font-weight: 600;
    font-size: 22px;
    line-height: 25px;
    color: ${props => props.theme.colors.dark};
    text-transform: uppercase;
    letter-spacing: 0.06em;
`;

export const StyledTopConainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledControlsContainer = styled.div`
    @media (max-width: 400px) {
        width: 100px;
    }
`;

export const StyledButton = styled.button`
    font-size: 30px;
    color: ${props => props.theme.colors.dark};
    margin: 0 5px;
    padding: 10px;
    border: none;
    background-color: transparent;
    text-align: center;
`;

export const StyledItemsContainer = styled.div`
    display: grid;
    grid-template-rows: 400px;
    grid-template-columns: repeat(7, 255px);
    width: calc(255px * 3);
    margin: 0 auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    justify-items: left;
    align-items: center;

    @media (max-width: 800px) {
        width: calc(255px *2);
    }

    @media (max-width: 600px) {
        width: 255px;
    }
`;