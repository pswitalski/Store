import React from 'react';

import { StyledNavMenu, StyledH1, StyledItemsContainer, StyledNavMenuContainer, StyledLink } from './NavMenu.styles';
import { Wrapper } from 'assets/styles/Wrapper';

import BestsellerItem from 'components/Nav/NavMenu/BestsellerItem/BestsellerItem';

const NavMenu = () => (
    <StyledNavMenu>
        <Wrapper>
            <StyledNavMenuContainer>
                <StyledH1>bestsellers</StyledH1>
                <StyledItemsContainer>
                    <StyledLink to={`/product/${3}`} >
                        <BestsellerItem id={3} />
                    </StyledLink>
                    <StyledLink to={`/product/${19}`} >
                        <BestsellerItem id={19} />
                    </StyledLink>
                    <StyledLink to={`/product/${17}`} >
                        <BestsellerItem id={17} />
                    </StyledLink>
                </StyledItemsContainer>
            </StyledNavMenuContainer>

        </Wrapper>
    </StyledNavMenu>
)

export default NavMenu;