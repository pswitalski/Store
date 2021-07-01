import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { StyledComment, StyledH4, StyledP, StyledContainer } from './Comment.styles';

import Grade from 'components/ItemCard/Grade/Grade';

const Comment = ({item}) => {
    const [grade, setGrade] = useState(5);

    useEffect(() => {
        const grade = Math.floor(Math.random() * 5) + 1;
        setGrade(grade);
    }, [item])

    return(
        <StyledComment>
            <StyledContainer>
                <StyledH4>
                    {item.name}
                </StyledH4>
                <Grade grade={grade} />
            </StyledContainer>
            <StyledP>
                {item.body}
            </StyledP>
        </StyledComment>
    )
}

Comment.propTypes = {
    item: PropTypes.object
}

export default Comment;