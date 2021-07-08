import styled from "styled-components";

export const StyledShoppingCartTotal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 40px;
    color: ${props => props.theme.colors.dark};
`;

export const StyledP = styled.p`
    font-size: 14px;
    line-height: 40px;
`;

export const StyledValue = styled.p`
    font-size: 16px;
    line-height: 40px;
    font-weight: 600;
    letter-spacing: 0.06em;
`;