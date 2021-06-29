import styled from "styled-components";

export const StyledTopFooter = styled.div`
    height: 56px;
    background-color: ${props => props.theme.colors.dark};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;

    @media (max-width: 600px) {
        padding: 0 5px;
        justify-content: center;
    }
`;

export const StyledContainer = styled.div`
    display: flex;

    &.mobileHide {
        @media (max-width: 600px) {
            display: none;
        }
    }
`;

export const StyledP = styled.p`
    color: ${props => props.theme.colors.white};
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.06em;
    text-transform: uppercase;

    @media (max-width: 800px) {
        display: none;
    }
`;

export const StyledForm = styled.form`
    display: flex;
`;

export const StyledInput = styled.input`
    height: 32px;
    width: 400px;
    margin-right: 10px;
    outline: none;
    padding: 0 20px;
    font-size: 13px;
    font-weight: 500;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    border: none;

    &::placeholder {
        color: rgba(255, 255, 255, 0.4)
    }

    @media (max-width: 1000px) {
        width: 200px;
    }
`;

export const StyledButton = styled.button`
    height: 32px;
    width: 108px;
    color: rgba(255, 255, 255, 0.9);
    background-color: ${props => props.theme.colors.dark};
    border: 1px solid #fff;
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;

    &:disabled {
        opacity: 0.8;
        cursor: auto;
    }
`;