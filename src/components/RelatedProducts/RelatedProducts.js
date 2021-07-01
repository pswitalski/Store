import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { StyledRelatedProducts, StyledH2, StyledTopConainer, StyledControlsContainer, StyledButton, StyledItemsContainer } from './RelatedProducts.styles';

import ItemCard from 'components/ItemCard/ItemCard';
import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator';

import { getItemsFromCategory } from 'helpers/getItemsFromCategory';

const RelatedProducts = ({category}) => {

    const [related, setRelated] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchRelatedItems = async () => {
        setIsLoading(true);
        const response = await getItemsFromCategory(category);
        setRelated(response);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchRelatedItems();
    }, [])

    const createRelatedItems = () => {
        const items = related.map(item => (
            <ItemCard item={item} key={item.id} />
        ))
        return items;
    }

    const slider = useRef();

    const slideHandler = (target, direction) => {
        const width = target.current.offsetWidth;
        const currentScrollPosition = target.current.scrollLeft;
        let divisor;
        console.log(typeof(width))

        if (width > 800) {
            divisor = 3;
        } else if (width > 600) {
            divisor = 2;
        } else {
            divisor = 1;
        }

        const step = width / divisor;

        switch(direction) {
            case 'right':
                target.current.scrollTo(currentScrollPosition + step, 0);
                break;
            case 'left':
                target.current.scrollTo(currentScrollPosition - step, 0);
                break;
            case 'reset':
                if (target.current.scrollLeft !== 0) {
                    target.current.scrollTo(0, 0);
                }
                break;
            default:
                return;
        }
    }

    useEffect(() => {
        window.onresize = () => {
            slideHandler(slider, 'reset');
        }

        return () => {
            window.onresize = null;
        }

    })

    return(
        <StyledRelatedProducts>
            <StyledTopConainer>
                <StyledH2>related products</StyledH2>
                <StyledControlsContainer>
                    <StyledButton onClick={() => slideHandler(slider, 'left')} >{"<"}</StyledButton>
                    <StyledButton onClick={() => slideHandler(slider, 'right')} >{">"}</StyledButton>
                </StyledControlsContainer>
            </StyledTopConainer>
            {isLoading ? <LoadingIndicator /> : null}
            <StyledItemsContainer ref={slider}  >
                {!isLoading ? createRelatedItems() : null}
            </StyledItemsContainer>
        </StyledRelatedProducts>
    )
}

RelatedProducts.propTypes = {
    category: PropTypes.string
}

export default RelatedProducts;
