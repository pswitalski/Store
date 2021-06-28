import React from 'react';

import { Wrapper } from 'assets/styles/Wrapper';

import Landing from 'components/Landing/Landing';
import Advantage from 'components/Advantage/Advantage';
import HomeCategorySeciton from 'components/HomeCategorySection/HomeCategorySection';

const Home = () => {
    return (
        <div className='home'>
            <Wrapper>
                <Landing />
                <Advantage />
                <HomeCategorySeciton category="women's clothing" />
            </Wrapper>
        </div>
    )
}

export default Home;