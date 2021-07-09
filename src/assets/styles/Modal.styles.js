import styled from "styled-components";

export const StyledModal = styled.div`
    width: 388px;
    height: 720px;
    background-color: white;
    position: absolute;
    top: calc(66px + 24px + 10px);
    right: 50px;
    z-index: 200;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 2px solid #E6E6E6;
    padding-bottom: 24px;

    @media (max-width: 800px) {
        right: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    @media (max-width: 400px) {
        width: 360px;
    }
`;