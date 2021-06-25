import styled from "styled-components";

import { StyledNav } from "../Nav.styles";

export const StyledNavMenu = styled.nav`
    background-color: ${props => props.theme.colors.white};
    display: none;
    height: 336px;

    ${ StyledNav }:hover & {
        display: block;

        @media (max-width: 600px) {
            display: none;
        }
    }
`;