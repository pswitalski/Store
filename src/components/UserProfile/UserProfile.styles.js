import styled from "styled-components";

export const StyledUserProfile = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70%;
    color: ${props => props.theme.colors.dark};
`;

export const StyledName = styled.h2`
    margin-bottom: 30px;
`;

export const StyledImg = styled.img`
    height: auto;
    width: auto;
`;

export const StyledP = styled.p`
    margin-top: 30px;
`;