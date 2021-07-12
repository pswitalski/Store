import styled from "styled-components";

export const StyledButton = styled.button`
    display: block;
    background-color: ${props => props.theme.colors.dark};
    color: rgba(255, 255, 255, 0.9);
    height: 40px;
    width: 145px;
    font-weight: 500;
    font-size: 13px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;

    &:disabled {
        cursor: default;
        opacity: 0.8;
    }
`;