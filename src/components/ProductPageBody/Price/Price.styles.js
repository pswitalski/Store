import styled from "styled-components";

export const StyledPrice = styled.div`
    background-color: green;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 0;
    border-bottom: 2px solid #E6E6E6;
`;

export const StyledP = styled.p`
    margin-right: 20px;
    font-weight: 700;
    font-size: 22px;
    line-height: 36px;
    color: ${props => props.theme.colors.dark};
`;