import styled from "styled-components";

export const StyledNameBar = styled.h2`
    width: 100%;
    height: 70px;
    text-align: center;
    text-transform: uppercase;
    color: ${props => props.theme.colors.dark};
    font-weight: 600;
    letter-spacing: 0.06em;
    line-height: 36px;
    font-size: 26px;
    padding: 0 20px;

    @media (max-width: 800px) {
        font-size: 14px;
    }
`;