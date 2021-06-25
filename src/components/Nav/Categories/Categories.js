import React from 'react';
import { useSelector } from 'react-redux';

import { StyledUl, StyledLi, StyledNavLink } from './Categories.styles';

const Categories = () => {

    const categories = useSelector(state => state.categories.categories);

    // console.log(categories)

    const createCategories = (list) => {
        const categoriesComponents = list.map((category) => {
            return(
                <StyledLi key={category} ><StyledNavLink exact to="/" >{category}</StyledNavLink></StyledLi>
            )
        });
        return(
            <>
                {categoriesComponents}
            </>
        )
    }


return(
        <StyledUl>
            <StyledLi><StyledNavLink exact to="/" >{categories}</StyledNavLink></StyledLi>
            <StyledLi><StyledNavLink to="/men" >lorem</StyledNavLink></StyledLi>
            <StyledLi><StyledNavLink to="/women" >lorem</StyledNavLink></StyledLi>
            {createCategories(categories)}
        </StyledUl>
)
}

export default Categories;