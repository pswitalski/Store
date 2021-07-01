import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { StyledItemCard, StyledH3, StyledImg, StyledP, StyledHoverContainer, StyledDataContainer, StyledPriceGradeContainer, StyledLink } from './ItemCard.styles';

import Grade from './Grade/Grade';
import Button from './Button/Button';

const ItemCard = ({item: {image, title, price = 0, description, id, category}}) => {

    const [grade, setGrade] = useState(5);

    useEffect(() => {
        const grade = Math.floor(Math.random() * 5) + 1;
        setGrade(grade);
    }, [grade])

    return(
        <StyledLink to={`/product/${id}`}>
        <StyledItemCard className={`item-id=${id}`} >
            <StyledImg src={image} alt={title} />
            <StyledDataContainer>
                <StyledH3>{title}</StyledH3>
                <StyledPriceGradeContainer>
                    <StyledP>${price.toFixed(2)}</StyledP>
                    <Grade grade={grade} />
                </StyledPriceGradeContainer>
            </StyledDataContainer>
            <StyledHoverContainer>
                <Button text="add to card" />
            </StyledHoverContainer>
        </StyledItemCard>
        </StyledLink>
    )
}

ItemCard.propTypes = {
    item: PropTypes.object
}

export default ItemCard;