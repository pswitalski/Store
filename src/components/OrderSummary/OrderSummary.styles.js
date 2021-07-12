import styled from "styled-components";

export const StyledOrderSummary = styled.section`
    color: ${props => props.theme.colors.dark};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`;

export const StyledH1 = styled.h1`
    line-height: 42px;
`;

export const StyledItemsContainer = styled.div``;

export const StyledDataContainer = styled.div`
    margin-top: 10px;
    text-align: center;

    &.disabled {
        display: none;
    }
`;

export const StyledP = styled.p`
    line-height: 30px;

    &.red {
        color: ${props => props.theme.colors.error};
    }
`;

export const StyledSpan = styled.span`
    font-weight: 700;
`;