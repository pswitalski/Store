import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    height: 24px;
    background-color: ${props => props.theme.colors.dark};
`;

export const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: 100%;
    width: 100%;
`;

export const StyledList = styled.ul`
    display: flex;
    list-style: none;
`;