import styled from "styled-components";

export const StyledBasketCounter = styled.div`
    width: 81px;
    height: 32px;
    background-color: ${props => props.theme.colors.grWhite};
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.hide {
        justify-content: center;
    }
`;

export const StyledButton = styled.button`
    border: none;
    background-color: transparent;
    height: 100%;
    width: 33%;
    cursor: pointer;

    &:disabled {
        cursor: default;
    }

    &.hide {
        display: none;
    }
`;

export const StyledP = styled.p`
    color: ${props => props.theme.colors.dark};
    font-size: 14px;
    line-height: 32px;
`;

export const StyledImg = styled.img`
    height: 20px;
    width: 20px;
`;