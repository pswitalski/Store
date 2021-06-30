import styled from "styled-components";

export const StyledItem = styled.div`
    width: 238px;
    height: 80%;
    margin: 0 10px;
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const StyledImg = styled.img`
    width: auto;
    height: 100%;
`;

export const StyledImgContainer = styled.div`
    height: 80%;
    align-self: center;
    flex-grow: 0;
`;

export const StyledH2 = styled.h2`
    text-transform: capitalize;
    color: ${props => props.theme.colors.dark};
    font-size: ${props => props.theme.fontSize.small11_18};
    opacity: 0.6;
    font-weight: ${props => props.theme.fontWeight.small11_18};
`;

export const StyledP = styled.p`
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.theme.colors.dark};
`;