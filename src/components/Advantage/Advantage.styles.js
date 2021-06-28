import styled from "styled-components";

export const StyledAdvantage = styled.section`
    height: 103px;
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.dark};
    position: relative;

    @media (max-width: 600px) {
        flex-direction: column;
        height: fit-content;
        padding-bottom: 10px;
    }

    &::after {
        display: block;
        content: '';
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: ${props => props.theme.colors.grWhite};
    }
`;