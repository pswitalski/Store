import React, { useEffect } from 'react';

import NavMenu from 'components/Nav/NavMenu/NavMenu';
import Logo from 'components/Nav/Logo/Logo';
import Categories from './Categories/Categories';
import Controls from './Controls/Controls';

import { Wrapper } from 'assets/styles/Wrapper';
import { StyledNav, StyledDiv } from 'components/Nav/Nav.styles';

import { useDispatch } from 'react-redux';
import { getCategories } from 'features/categories/categoriesSlice';
import { getCategoriesFromApi } from 'features/categories/getCategoriesFromApi';

const Nav = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const categories = getCategoriesFromApi();
    }, [])

return(
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
}

export default Nav;