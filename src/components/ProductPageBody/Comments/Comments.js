import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { StyledComments, StyledH3 } from './Comments.styles';

import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator';
import Comment from './Comment/Comment';

import { getCommentsFromApi } from 'helpers/getCommentsFromApi';

const Comments = ({id}) => {

    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchComments = async () => {
        setIsLoading(true);
        const response = await getCommentsFromApi(id);
        setComments(response);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchComments();
    }, [])

    const createComents = () => {
        const items = comments.map(item => (
            <Comment item={item} key={item.id} />
        ))
        return items;
    }


    return(
        <StyledComments>
            <StyledH3>
                reviews
            </StyledH3>
            {isLoading ? <LoadingIndicator /> : null}
            {!isLoading ? createComents(): null}
        </StyledComments>
    )
}

Comments.propTypes = {
    id: PropTypes.number
}

export default Comments;