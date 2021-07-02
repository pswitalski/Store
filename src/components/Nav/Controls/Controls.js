import React from 'react';
import { useDispatch } from 'react-redux';
import { open } from 'features/navOpen/navOpenSlice';
import { toggleLoginModal } from 'features/loginModalOpen/loginModalSlice';

import ControlButton from './ControlButton/ControlButton';

import { StyledUl } from 'components/Nav/Controls/Controls.styles'

import search from 'assets/icons/search 1.png';
import globe from 'assets/icons/globe 1.png';
import person from 'assets/icons/user 1.png';
import basket from 'assets/icons/shopping-bag 2.png';
import menu from 'assets/icons/view-list 2.png';

const Controls = () => {

    const dispatch = useDispatch()

    const openMenuHandler = () => {
        dispatch(open());
    }

    const openLoginModalHandler = () => {
        dispatch(toggleLoginModal());
    }

return (
    <StyledUl>
        <li><ControlButton icon={search} /></li>
        <li><ControlButton icon={globe} /></li>
        <li><ControlButton icon={person} onClick={openLoginModalHandler} /></li>
        <li><ControlButton icon={basket} counter={23} /></li>
        <li><ControlButton icon={menu} mobile onClick={openMenuHandler} /></li>
    </StyledUl>
)
}

export default Controls;