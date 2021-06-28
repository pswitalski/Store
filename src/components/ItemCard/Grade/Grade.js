import React from 'react';
import PropTypes from 'prop-types'

import { StyledGrade, StyledImg } from './Grade.styles';

import goldStar from 'assets/icons/star.png';

const Grade = ({grade}) => {
    return(
        <StyledGrade>
            <StyledImg className={grade > 0 ? 'gold' : ''} src={goldStar} alt="star" />
            <StyledImg className={grade > 1 ? 'gold' : ''} src={goldStar} alt="star" />
            <StyledImg className={grade > 2 ? 'gold' : ''} src={goldStar} alt="star" />
            <StyledImg className={grade > 3 ? 'gold' : ''} src={goldStar} alt="star" />
            <StyledImg className={grade > 4 ? 'gold' : ''} src={goldStar} alt="star" />
        </StyledGrade>
    )
}

Grade.propTypes = {
    grade: PropTypes.number
}

export default Grade;