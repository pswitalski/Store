import React from 'react';

import { useSelector } from 'react-redux';

import { StyledExampleLoginData, StyledUl } from './ExampleLoginData.styles';
import { StyledP } from 'components/LoginModal/LoginModal.styles';

const ExampleLoginData = () => {
    const exampleUser = useSelector(state => state.exampleUser.exampleUser);
    return(
        <StyledExampleLoginData>
            <StyledP>You can use this data:</StyledP>
            <StyledUl>
                <li>Email: {exampleUser.data.email}</li>
                <li>Password: any</li>
            </StyledUl>
        </StyledExampleLoginData>
    )
}

export default ExampleLoginData;