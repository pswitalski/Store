import styled from "styled-components";

export const StyledBasketItem = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid ${props => props.theme.colors.grey};
    width: 100%;
    height: 128px;
    padding: 14px 0;
`;

export const StyledImageContainer = styled.div`
    flex-grow: 0;
    flex-shrink: 0;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledImg = styled.img`
    max-height: 100%;
    width: auto;
    max-width: 100%;
`;

export const StyledDataContainer = styled.div`
    flex-grow: 1;
    padding-left: 10px;
    color: ${props => props.theme.colors.dark};
    display: flex;
    flex-direction: column;
`;

export const StyledName = styled.h3`
    font-size: 14px;
    line-height: 22px;
    opacity: 0.6;
    max-height: 44px;
    overflow: hidden;
`;

export const StyledCategory = styled.p`
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
`;

export const StyledControls = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
`;