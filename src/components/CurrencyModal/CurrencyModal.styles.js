import styled from "styled-components";

export const StyledForm = styled.form`
    width: 90%;
    margin: 20px auto auto;
    color: ${props => props.theme.colors.dark};
`;

export const StyledFieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
`;

export const StyledInput = styled.input`
    margin-right: 10px;

    &:checked + span {
        font-weight: 700;
    }
`;

export const StyledLabel = styled.label`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 13px;
    line-height: 34px;
`;

export const StyledH2 = styled.h2`
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 22px;
`;