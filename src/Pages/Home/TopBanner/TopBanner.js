import React from 'react';
import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './TopBanner.css'

const TopBanner = () => {
    return (
        <div className="banner-bg">
            <Fade bottom duration={2500} distance="40px">
                <div className="text-center mt-4">
                    <h1 className="text-white banner-title fw-bold">WELCOME TO CAR CMART
                    </h1>
                    <p className="text-white fs-para fw-light">Find Your Dream Car from Thousands of Brands and Model From Cmart</p>
                    <NavLink to="#">
                        <button className="btn-regular">Explore More</button>
                    </NavLink>
                </div>
            </Fade>
        </div>
    );
};

export default TopBanner;