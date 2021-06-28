import styled from "styled-components";

export const StyledLanding = styled.section`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    height: 540px;
    margin-top: 20px;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(5, 1fr);
        height: 1000px;
        grid-gap: 15px 0;
    }
`;