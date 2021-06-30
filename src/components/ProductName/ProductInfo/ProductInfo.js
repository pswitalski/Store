import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import { StyledProductInfo, StyledDataContainer, StyledP, StyledSpan } from './ProductInfo.styles';

import Grade from 'components/ItemCard/Grade/Grade';

const ProductInfo = ({id}) => {

    const [grade, setGrade] = useState(5);

    useEffect(() => {
        const grade = Math.floor(Math.random() * 5) + 1;
        setGrade(grade);
    }, [grade])

    return(
        <StyledProductInfo>
            <StyledDataContainer>
                <Grade grade={grade} />
            </StyledDataContainer>
            <StyledDataContainer>
                <StyledP>SKU: </StyledP><StyledSpan>{id}</StyledSpan>
                <StyledP>Availabity: </StyledP><StyledSpan>in stock</StyledSpan>
            </StyledDataContainer>
        </StyledProductInfo>
    )
}

ProductInfo.propTypes = {
    id: PropTypes.number
}

export default ProductInfo;