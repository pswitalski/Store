import React from 'react';

import { StyledModal } from 'assets/styles/Modal.styles';
import { StyledUserProfile, StyledImg, StyledName, StyledP } from './UserProfile.styles';

import ModalHeader from 'components/ModalHeader/ModalHeader';
import ModalButton from 'components/ModalButton/ModalButton';

import { useSelector, useDispatch } from 'react-redux';
import { toggleUserProfileModal, toggleIsUserLogIn } from 'features/currentUser/currentUserSlice';
import { toggleLoginModal } from 'features/loginModalOpen/loginModalSlice';

const UserProfile = () => {

    const userData = useSelector(state => state.exampleUser);
    console.log(userData.exampleUser.data)

    const {email, first_name, last_name, avatar} = userData.exampleUser.data;

    const dispatch = useDispatch();

    const closeMenuHandler = () => {
        dispatch(toggleUserProfileModal({type: 'CLOSE'}));
    }

    const logOffHandler = () => {
        window.localStorage.clear();
        dispatch(toggleIsUserLogIn(false));
        dispatch(toggleUserProfileModal({type: 'CLOSE'}));
        dispatch(toggleLoginModal({type: 'OPEN'}));
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