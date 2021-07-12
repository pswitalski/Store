import styled from "styled-components";

export const StyledModalButton = styled.button`
    width: 340px;
    height: 48px;
    background-color: ${props => props.isDark ? '#121212' : '#F8F8F8'};
    color: ${props => props.isDark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(18, 18, 18, 0.9)'};
    text-transform: uppercase;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.06em;
    border: none;
    cursor: pointer;

    &:disabled {
        cursor: default;
        opacity: 0.8;
    }
`;