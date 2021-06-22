import styled from "styled-components";

export const StyledDiv = styled.div`
    position: absolute;
    right: -5px;
    top: -5px;
    border-radius: 50%;
    border: 2px solid;
    border-color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.dark};
    padding: 2px;
`;

export const StyledP = styled.p`
    color: ${props => props.theme.colors.white};
    font-size: 9px;
`;