import React from 'react';

import { Wrapper } from 'assets/styles/Wrapper';

import Landing from 'components/Landing/Landing';

const Home = () => {
    return (
        <div className='home'>
            <Wrapper>
                <Landing />
            </Wrapper>
        </div>
    )
}

export default Home;