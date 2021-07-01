import styled from "styled-components";

export const StyledDescription = styled.div`
    padding: 0 0 20px;
    border-bottom: 2px solid #E6E6E6;
`;

export const StyledP = styled.p`
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    color: ${props => props.theme.colors.dark};
    opacity: 0.8;
    margin-top: 20px;
`;

export const StyledH3 = styled.h3`
    padding: 30px 0;
    border-bottom: 2px solid #E6E6E6;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: rgba(18, 18, 18, 0.6);
    letter-spacing: 0.06em;
    display: flex;
    align-items: center;
`;