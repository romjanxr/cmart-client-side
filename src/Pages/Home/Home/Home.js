import React, { useEffect } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import FeaturedCar from '../FeaturedCar/FeaturedCar';
import Testimonials from '../Testimonials/Testimonials';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    useEffect(() => {
        document.title = "Cmart | Home"
    }, []);

    return (
        <div>
            <Header />
            <TopBanner />
            <FeaturedCar />
            <Testimonials />
            <About />
            <Footer />
        </div>
    );
};

export default Home;