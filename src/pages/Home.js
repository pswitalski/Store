import React from 'react';

import { useSelector } from 'react-redux';

import { Wrapper } from 'assets/styles/Wrapper';

import Landing from 'components/Landing/Landing';
import Advantage from 'components/Advantage/Advantage';
import HomeCategorySeciton from 'components/HomeCategorySection/HomeCategorySection';
import SaleSection from 'components/SaleSection/SaleSection';
import NewsletterSection from 'components/NewsletterSection/NewsletterSection';

import { useCloseModals } from 'hooks/useCloseModals';

const Home = () => {

    const categories = useSelector(state => state.categories.categories);

    const createHomeCategoriesSections = () => {
        const sections = categories.map(category => (
            <HomeCategorySeciton key={category} category={category} />
        ))
        return sections;
    }

    const closeAllModals = useCloseModals();

    return (
        <div className='home' onClick={closeAllModals} >
            <Wrapper>
                <Landing />
                <Advantage />
                {createHomeCategoriesSections()}
                <SaleSection />
                <NewsletterSection />
            </Wrapper>
        </div>
    )
}

export default Home;