import React from 'react';

import { Wrapper } from 'assets/styles/Wrapper';
import MainBasket from 'components/MainBasket/MainBasket';

const Basket = () => {
    return(
        <div className="basket">
            <Wrapper>
                <MainBasket />
            </Wrapper>
        </div>
    )
}

export default Basket;