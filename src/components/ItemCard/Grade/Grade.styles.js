import styled from "styled-components";

export const StyledGrade = styled.div`
    height: 14px;
`;

export const StyledImg = styled.img`
    filter: grayscale(1);
    height: 100%;
    width: auto;

    &.gold {
        filter: none;
    }
`;