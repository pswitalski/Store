import styled from "styled-components";

export const StyledModal = styled.div`
    width: 388px;
    height: 720px;
    background-color: red;
    position: absolute;
    top: calc(66px + 24px + 10px);
    right: 50px;
    z-index: 200;

    display: ${props => props.active ? 'flex' : 'none'};
`;