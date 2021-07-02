import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: flex-start;
    border-bottom: 2px solid ${props => props.theme.colors.grWhite};
    padding-bottom: 24px;
    margin-bottom: auto;
`;

export const StyledLabel = styled.label`
    text-transform: uppercase;
    align-self: flex-start;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: ${props => props.theme.colors.dark};
    letter-spacing: 0.06em;
`;

export const StyledInput = styled.input`
    width: 100%;
    height: 48px;
    margin-top: 8px;
    margin-bottom: 24px;
    border: none;
    outline: none;
    background-color: ${props => props.theme.colors.grWhite};
    padding: 0 16px;

    &::placeholder {
        opacity: 0.4;
        color: ${props => props.theme.colors.dark};
        font-size: 14px;
        line-height: 18px;
        font-weight: 500;
    }
`;

export const StyledP = styled.p`
    margin-top: 24px;
    margin-bottom: 24px;
    color: ${props => props.theme.colors.dark};
    font-size: 14px;
    line-height: 22px;
`;