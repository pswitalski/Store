import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { open } from 'features/navOpen/navOpenSlice';
import { toggleLoginModal, closeLoginModal } from 'features/loginModalOpen/loginModalSlice';
import { toggleUserProfileModal, closeUserProfileModal } from 'features/currentUser/currentUserSlice';
import { toggleCurrencyModal, closeCurrencyModal } from 'features/currency/currencySlice';
import { toggleShoppingCartModal, closeShoppingCartModal } from 'features/basket/basketSlice';
import { toggleSearchModalOpen, closeSearchModalOpen } from 'features/search/searchSlice';

import ControlButton from './ControlButton/ControlButton';

import { StyledUl } from 'components/Nav/Controls/Controls.styles'

import search from 'assets/icons/search 1.png';
import globe from 'assets/icons/globe 1.png';
import person from 'assets/icons/user 1.png';
import basket from 'assets/icons/shopping-bag 2.png';
import menu from 'assets/icons/view-list 2.png';

import { useCloseModals } from 'hooks/useCloseModals';

const Controls = () => {

    const dispatch = useDispatch();
    const isUserLogIn = useSelector(state => state.currentUser.isUserLogIn);
    console.log(isUserLogIn)

    const closeAllModals = useCloseModals();

    const openMenuHandler = () => {
        closeAllModals();
        dispatch(open());
    }

    const openLoginModalHandler = () => {
        dispatch(closeCurrencyModal());
        dispatch(closeSearchModalOpen());
        dispatch(closeShoppingCartModal());
        if (!isUserLogIn){
            dispatch(toggleLoginModal());
        } else {
            dispatch(toggleUserProfileModal())
        }
    }

    const openCurrencyHandler = () => {
        dispatch(closeLoginModal());
        dispatch(closeSearchModalOpen());
        dispatch(closeShoppingCartModal());
        dispatch(toggleCurrencyModal());
    }

    const openShoppingCartHandler = () => {
        dispatch(closeCurrencyModal());
        dispatch(closeLoginModal());
        dispatch(closeSearchModalOpen());
        dispatch(toggleShoppingCartModal());
    }

    const openSearchModalHandler = () => {
        dispatch(closeCurrencyModal());
        dispatch(closeLoginModal());
        dispatch(closeShoppingCartModal());
        dispatch(toggleSearchModalOpen());
    }

    const itemsInBasket = useSelector(state => state.basket.quantityOfItems);

return (
    <StyledUl>
        <li><ControlButton icon={search} onClick={openSearchModalHandler} /></li>
        <li><ControlButton icon={globe} onClick={openCurrencyHandler} /></li>
        <li><ControlButton icon={person} onClick={openLoginModalHandler} /></li>
        <li><ControlButton icon={basket} counter={itemsInBasket} onClick={openShoppingCartHandler} /></li>
        <li><ControlButton icon={menu} mobile onClick={openMenuHandler} /></li>
    </StyledUl>
)
}

export default Controls;