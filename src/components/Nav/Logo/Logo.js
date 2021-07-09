import React from 'react';
import PropTypes from 'prop-types';

import { StyledH1, StyledNavLink } from 'components/Nav/Logo/Logo.styles';

import { useCloseModals } from 'hooks/useCloseModals';

const Logo = ({name}) => {

    const closeAllModals = useCloseModals();

    return(
    <StyledNavLink exact to="/" onClick={closeAllModals} >
        <StyledH1>{name}</StyledH1>
    </StyledNavLink>
)}

Logo.propTypes = {
    name: PropTypes.string
}

export default Logo;