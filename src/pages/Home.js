import React from 'react';

import { Wrapper } from 'assets/styles/Wrapper';

import Landing from 'components/Landing/Landing';
import Advantage from 'components/Advantage/Advantage';

const Home = () => {
    return (
        <div className='home'>
            <Wrapper>
                <Landing />
                <Advantage />
            </Wrapper>
        </div>
    )
}

export default Home;