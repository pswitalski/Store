import React from 'react';

import { Wrapper } from 'assets/styles/Wrapper';
import OrderSummary from 'components/OrderSummary/OrderSummary';

const Checkout = () => {
    return(
        <div className="checkout">
            <Wrapper>
                <OrderSummary />
            </Wrapper>
        </div>
    )
}

export default Checkout;