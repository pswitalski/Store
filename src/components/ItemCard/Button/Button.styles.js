import styled from "styled-components";

export const StyledButton = styled.button`
    display: block;
    background-color: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.white};
    height: 40px;
    width: 145px;
    font-weight: 500;
    font-size: 13px;
    text-transform: uppercase;
    border: none;
    opacity: 0.9;
`;