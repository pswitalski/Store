import styled from "styled-components";

export const StyledListItem = styled.li`
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0 10px;

    @media(max-width: 600px) {
        display: none;
    }
`;

export const StyledImg = styled.img`
    filter: invert(1);
    height: 70%;
    opacity: 0.8;
    align-self: center;
`;

export const StyledP = styled.p`
    opacity: 0.8;
    font-size: ${props => props.theme.fontSize.small11_18};
    font-weight: ${props => props.theme.fontWeight.small11_18};
    color: white;
    margin-left: 10px;
`;