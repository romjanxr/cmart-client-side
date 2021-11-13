import React from 'react';
import about from '../../../images/about.jpg'
import './About.css'

const About = () => {
    return (
        <div className="py-5 my-5" id="about">
            <div className="row w-80 mx-auto g-3">
                <div className="col-md-6">
                    <div className="about-slider-box">
                        <img className="img-fluid" src={about} alt="" />
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div className=" about-text">
                        <h3>Welcome to<span>Car Cmart</span></h3>
                        <p>
                            Cmart is a leading digital marketplace and solutions provider for the automotive industry that connects car shoppers with sellers. Launched in 1998 and headquartered in Chicago, the Company empowers shoppers with the data, resources and digital tools needed to make informed buying decisions and seamlessly connect with automotive retailers.
                            <br />
                            <br />
                            In a rapidly changing market, Cmart enables dealerships and OEMs with innovative technical solutions and data-driven intelligence to better reach and influence ready-to-buy shoppers, increase inventory turn and gain market share.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;