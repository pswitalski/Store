import styled from "styled-components";

export const StyledModalHeader = styled.header`
    height: 48px;
    width: 100%;
    background-color: ${props => props.theme.colors.dark};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
`;

export const StyledH2 = styled.h2`
    color: ${props => props.theme.colors.white};
    font-weight: ${props => props.theme.fontWeight.title14_22};
    font-size: ${props => props.theme.fontSize.title14_22};
    letter-spacing: ${props => props.theme.letterSpacing.title14_22};
    line-height: ${props => props.theme.lineHeight.title14_22};
    text-transform: uppercase;
`;

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    filter: invert(1) opacity(0.6);
    height: 24px;
    width: 24px;
`;