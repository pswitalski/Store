import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledPathBar = styled.div`
    height: 32px;
    width: 100%;
    color: ${props => props.theme.colors.dark};
    font-weight: 500;
    font-size: 11px;
    line-height: 18px;
    display: flex;
    align-items: center;
    padding-left: 85px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    opacity: 0.6;
    color: inherit;
    margin-right: 5px;
`;