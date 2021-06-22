import React from 'react';

import NavMenu from 'components/Nav/NavMenu/NavMenu';
import Logo from 'components/Nav/Logo/Logo';
import Categories from './Categories/Categories';
import Controls from './Controls/Controls';

import { Wrapper } from 'assets/styles/Wrapper';
import { StyledNav, StyledDiv } from 'components/Nav/Nav.styles';

const Nav = () => (
    <StyledNav>
        <Wrapper>
            <StyledDiv>
                <Logo name="StoRe" />
                <Categories />
                <Controls />
            </StyledDiv>
        </Wrapper>
        <NavMenu />
    </StyledNav>
)

export default Nav;