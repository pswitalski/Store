import styled from "styled-components";

export const StyledFooter = styled.footer`
    height: 333px;
    width: 100%;
    color: ${props => props.theme.colors.dark};
    margin-top: 36px;
    margin: auto 0 0;

    @media (max-width: 600px) {
        height: fit-content;
    }
`;

export const StyledFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    height: 100%;
`;