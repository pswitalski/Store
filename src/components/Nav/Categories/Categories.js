import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { close } from 'features/navOpen/navOpenSlice';

import { StyledUl, StyledLi, StyledNavLink, StyledCloseButton } from './Categories.styles';

import closeImg from 'assets/icons/x 1.png';

const Categories = () => {

    const categories = useSelector(state => state.categories.categories);
    const navOpen = useSelector(state => state.navOpen.navOpen);
    const dispatch = useDispatch();

    const createCategories = (list) => {
        const categoriesComponents = list.map((category) => {
            return(
                <StyledLi key={category} ><StyledNavLink to={`/${category}`} onClick={closeMenuHandler} >{category}</StyledNavLink></StyledLi>

            )
        });
        return(
            <>
                {categoriesComponents}
            </>
        )
    }

    const closeMenuHandler = () => {
        dispatch(close())
    }

    useEffect(() => {
        window.onresize = () => {
            if (navOpen) {
                closeMenuHandler();
            };
        }
    })


return(
        <StyledUl className={navOpen ? 'menuActive' : ''} >
            {createCategories(categories)}
            <StyledCloseButton onClick={closeMenuHandler} >
                <img src={closeImg} alt="close" />
            </StyledCloseButton>
        </StyledUl>
)
}

export default Categories;