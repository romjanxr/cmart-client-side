import React from 'react';
import FeaturedCar from '../FeaturedCar/FeaturedCar';
import Testimonials from '../Testimonials/Testimonials';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <FeaturedCar />
            <Testimonials />
        </div>
    );
};

export default Home;