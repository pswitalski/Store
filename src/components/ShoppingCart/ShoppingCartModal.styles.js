import styled from "styled-components";

export const StyledItemsContainer = styled.div`
    margin: auto 0;
    width: 90%;
    height: 73%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;
    padding-right: 2px;

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