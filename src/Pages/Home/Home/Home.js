import React from 'react';
import Header from '../../Shared/Header/Header';
import FeaturedCar from '../FeaturedCar/FeaturedCar';
import Testimonials from '../Testimonials/Testimonials';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Header />
            <TopBanner />
            <FeaturedCar />
            <Testimonials />
        </div>
    );
};

export default Home;