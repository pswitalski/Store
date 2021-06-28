import React from 'react';

import { useSelector } from 'react-redux';

import { Wrapper } from 'assets/styles/Wrapper';

import Landing from 'components/Landing/Landing';
import Advantage from 'components/Advantage/Advantage';
import HomeCategorySeciton from 'components/HomeCategorySection/HomeCategorySection';
import SaleSection from 'components/SaleSection/SaleSection';

const Home = () => {

    const categories = useSelector(state => state.categories.categories);

    const createHomeCategoriesSections = () => {
        const sections = categories.map(category => (
            <HomeCategorySeciton key={category} category={category} />
        ))
        return sections;
    }

    return (
        <div className='home'>
            <Wrapper>
                <Landing />
                <Advantage />
                {createHomeCategoriesSections()}
                <SaleSection />
            </Wrapper>
        </div>
    )
}

export default Home;