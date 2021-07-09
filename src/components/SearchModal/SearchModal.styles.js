import styled from "styled-components";

import searchImg from 'assets/icons/search 1.png';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    color: ${props => props.theme.colors.dark};
    padding-bottom: 24px;
    border-bottom: 2px solid ${props => props.theme.colors.grey};
`;

export const StyledSelect = styled.select`
    width: 340px;
    height: 48px;
    margin-top: 24px;
    background-color: ${props => props.theme.colors.grWhite};
    border: none;
    outline: none;
    padding: 0 14px;
`;

export const StyledInput = styled.input`
    width: 340px;
    height: 48px;
    margin-top: 24px;
    background: ${props => props.theme.colors.grWhite} url(${searchImg}) right no-repeat;
    border: none;
    outline: none;
    padding: 0 28px 0 14px;

    &::placeholder {
        opacity: 0.4;
    }
`;

export const StyledResultsContainer = styled.div`
    overflow-y: auto;
    height: 67%;
    margin: auto 5% 0 5%;

    &::-webkit-scrollbar {
        width: 3px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.grey};
    }

    &::-webkit-scrollbar-thumb {
        background-color: #8D8B8B;
    }
`;

export const StyledEmptyMessage = styled.p`

`;

