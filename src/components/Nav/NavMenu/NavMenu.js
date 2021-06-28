import React from 'react';

import { StyledNavMenu, StyledH1, StyledItemsContainer, StyledNavMenuContainer } from './NavMenu.styles';
import { Wrapper } from 'assets/styles/Wrapper';

import BestsellerItem from 'components/Nav/NavMenu/Item/BestsellerItem';

const NavMenu = () => (
    <StyledNavMenu>
        <Wrapper>
            <StyledNavMenuContainer>
                <StyledH1>bestsellers</StyledH1>
                <StyledItemsContainer>
                    <BestsellerItem img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" name="product" price={56} />
                    <BestsellerItem img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" name="product" price={56} />
                    <BestsellerItem img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" name="product" price={56} />
                </StyledItemsContainer>
            </StyledNavMenuContainer>

        </Wrapper>
    </StyledNavMenu>
)

export default NavMenu;