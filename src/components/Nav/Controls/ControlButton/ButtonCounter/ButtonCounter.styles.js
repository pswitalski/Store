import styled from "styled-components";

export const StyledDiv = styled.div`
    position: absolute;
    right: -5px;
    top: -5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid;
    border-color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.dark};
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledP = styled.p`
    color: ${props => props.theme.colors.white};
    font-size: 9px;
`;