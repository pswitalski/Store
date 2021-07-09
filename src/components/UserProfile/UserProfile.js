import React from 'react';

import { StyledModal } from 'assets/styles/Modal.styles';
import { StyledUserProfile, StyledImg, StyledName, StyledP } from './UserProfile.styles';

import ModalHeader from 'components/ModalHeader/ModalHeader';
import ModalButton from 'components/ModalButton/ModalButton';

import { useSelector, useDispatch } from 'react-redux';
import { toggleIsUserLogIn, closeUserProfileModal } from 'features/currentUser/currentUserSlice';
import { openLoginModal } from 'features/loginModalOpen/loginModalSlice';

const UserProfile = () => {

    const userData = useSelector(state => state.exampleUser);

    const {email, first_name, last_name, avatar} = userData.exampleUser.data;

    const dispatch = useDispatch();

    const closeMenuHandler = () => {
        dispatch(closeUserProfileModal());
    }

    const logOffHandler = () => {
        window.localStorage.clear();
        dispatch(toggleIsUserLogIn(false));
        dispatch(closeUserProfileModal());
        dispatch(openLoginModal());
    }
    return(
        <StyledModal>
            <ModalHeader text="user profile" close={closeMenuHandler} />
            <StyledUserProfile>
                <StyledName>{first_name} {last_name}</StyledName>
                <StyledImg src={avatar} alt="user picture" />
                <StyledP>{email}</StyledP>
            </StyledUserProfile>
            <ModalButton isDark text="log off" onClick={logOffHandler} />
        </StyledModal>
    )
}

export default UserProfile;