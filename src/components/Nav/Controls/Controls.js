import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { open } from 'features/navOpen/navOpenSlice';
import { toggleLoginModal } from 'features/loginModalOpen/loginModalSlice';
import { toggleUserProfileModal } from 'features/currentUser/currentUserSlice';
import { toggleCurrencyModal } from 'features/currency/currencySlice';

import ControlButton from './ControlButton/ControlButton';

import { StyledUl } from 'components/Nav/Controls/Controls.styles'

import search from 'assets/icons/search 1.png';
import globe from 'assets/icons/globe 1.png';
import person from 'assets/icons/user 1.png';
import basket from 'assets/icons/shopping-bag 2.png';
import menu from 'assets/icons/view-list 2.png';

const Controls = () => {

    const dispatch = useDispatch();
    const isUserLogIn = useSelector(state => state.currentUser.isUserLogIn);
    console.log(isUserLogIn)

    const openMenuHandler = () => {
        dispatch(open());
    }

    const openLoginModalHandler = () => {
        if (!isUserLogIn){
            dispatch(toggleLoginModal());
        } else {
            dispatch(toggleUserProfileModal())
        }
    }

    const openCurrencyHandler = () => {
        dispatch(toggleCurrencyModal());
    }

return (
    <StyledUl>
        <li><ControlButton icon={search} /></li>
        <li><ControlButton icon={globe} onClick={openCurrencyHandler} /></li>
        <li><ControlButton icon={person} onClick={openLoginModalHandler} /></li>
        <li><ControlButton icon={basket} counter={23} /></li>
        <li><ControlButton icon={menu} mobile onClick={openMenuHandler} /></li>
    </StyledUl>
)
}

export default Controls;