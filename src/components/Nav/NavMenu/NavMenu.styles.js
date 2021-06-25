import styled from "styled-components";

import { StyledNav } from "../Nav.styles";

export const StyledNavMenu = styled.nav`
    background-color: red;
    display: none;
    height: 336px;

    ${ StyledNav }:hover & {
        display: block;
    }
`;