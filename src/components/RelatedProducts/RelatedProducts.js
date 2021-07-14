import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { useStateIfMounted } from 'use-state-if-mounted';

import { StyledRelatedProducts, StyledH2, StyledTopConainer, StyledControlsContainer, StyledButton, StyledItemsContainer } from './RelatedProducts.styles';

import ItemCard from 'components/ItemCard/ItemCard';
import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator';

import { getItemsFromCategory } from 'helpers/getItemsFromCategory';

const RelatedProducts = ({category}) => {

    const [related, setRelated] = useStateIfMounted([]);
    const [isLoading, setIsLoading] = useStateIfMounted(false);
    const [touchStart, setTouchStart] = useState(0);

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
        const currentScrollPosition = target.current.scrollLeft;

        const step = 255;

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

    const handleTouchStart = (e) => {
        setTouchStart(e.changedTouches[0].clientX);
    }

    const handleTouchEnd = (e) => {
        const touchEnd = e.changedTouches[0].clientX;

        if (touchEnd > touchStart && touchEnd - touchStart > 50) {
            slideHandler(slider, 'left');
        }

        if (touchEnd < touchStart && touchEnd - touchStart < -50) {
            slideHandler(slider, 'right');
        }
    }


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
            <StyledItemsContainer ref={slider} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}  >
                {!isLoading ? createRelatedItems() : null}
            </StyledItemsContainer>
        </StyledRelatedProducts>
    )
}

RelatedProducts.propTypes = {
    category: PropTypes.string
}

export default RelatedProducts;
