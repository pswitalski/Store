import React from 'react';

import { StyledUl, StyledLi, StyledNavLink } from './Categories.styles';

const Categories = () => (

        <StyledUl>
            <StyledLi><StyledNavLink exact to="/" >lorem</StyledNavLink></StyledLi>
            <StyledLi><StyledNavLink to="/men" >lorem</StyledNavLink></StyledLi>
            <StyledLi><StyledNavLink to="/women" >lorem</StyledNavLink></StyledLi>
        </StyledUl>


)

export default Categories;