import React from 'react';

import styled from 'styled-components';

import { useCloseModals } from 'hooks/useCloseModals';

const Styled404 = styled.h2`
    color: ${props => props.theme.colors.dark};
    font-size: ${props => props.theme.fontSize.title22_30};
    letter-spacing: ${props => props.theme.letterSpacing.title22_30};
    line-height: ${props => props.theme.lineHeight.title22_30};
    font-weight: ${props => props.theme.fontWeight.title22_30};
    text-transform: uppercase;
    margin: 100px auto;
    text-align: center;
`;

const Page404 = () => {

    const closeAllModals = useCloseModals();

    return(
        <div className="page404" onClick={closeAllModals} >
            <Styled404>
                that page does not exist
            </Styled404>
        </div>
    )
}

export default Page404;