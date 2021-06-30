import styled from "styled-components";

export const StyledProductInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledDataContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;

export const StyledP = styled.p`
margin-left: 20px;
color: ${props => props.theme.colors.dark};
font-weight: 500;
font-size: 11px;
line-height: 18px;
opacity: 0.6;
`;

export const StyledSpan = styled.span`
    font-weight: 700;
    font-size: 11px;
    line-height: 18px;
    color: ${props => props.theme.colors.dark};
    text-transform: capitalize;
    margin-left: 5px;
`;