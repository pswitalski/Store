import styled from "styled-components";

export const StyledItemsContainer = styled.div`
    margin: auto 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;
    padding: 0 5%;
    /* padding-right: 2px; */

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.grey};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.dark};
    }

`;