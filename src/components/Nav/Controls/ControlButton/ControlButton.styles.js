import styled from "styled-components";

export const StyledButton = styled.button`
    position: relative;
    background-color: transparent;
    border: none;
    margin-left: 10px;
    padding: 2px;
    cursor: pointer;

    &.mobile {
        display: none;

        @media (max-width: 600px) {
            display: block;
        }
    }
`;