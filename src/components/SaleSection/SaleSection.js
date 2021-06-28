import React from 'react';

import { StyledSaleSection } from 'components/SaleSection/SaleSection.styles';

import Sale from './Sale/Sale';

import saleImg from 'assets/img/sale.jpg';
import collectionImg from 'assets/img/collection.jpg';

const SaleSection = () => {
    return(
        <StyledSaleSection>
            <Sale image={collectionImg} header="new season" text="lookbook collection" />
            <Sale image={saleImg} header="sale" text="get up to" span="50% off" />
        </StyledSaleSection>
    )
}

export default SaleSection;