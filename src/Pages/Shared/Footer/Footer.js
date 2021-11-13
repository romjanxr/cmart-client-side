import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import { FaFax, FaLocationArrow } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-bg">
            <div className="row w-80 mx-auto">
                <div className="col-md-4 footer-text">
                    <h3>Contact Info</h3>
                    <p><MdLocationOn />  7/A Green Road, Dhanmondi, Dhaka</p>
                    <p><MdEmail />  info@cmart.com</p>
                    <p><MdPhone />  +0477 85X6 552</p>
                    <p><FaFax />  +0477 85X6 552</p>
                </div>
                <div className="col-md-4 footer-text">
                    <h3>Quick Links</h3>
                    <p>Home</p>
                    <p>Term</p>
                    <p>Privacy &amp; Policy</p>
                    <p>Blog</p>
                    <p>Contact Us</p>
                </div>
                <div className="col-md-4 footer-text">
                    <h3>SUBSCRIBE</h3>
                    <p>Subscribe now to get latest updates about cars</p>
                    <InputGroup className="mb-3">
                        <FormControl
                            className="footer-form"
                            placeholder="Enter Your Email"
                        />
                        <Button className="subscribe-btn">
                            <FaLocationArrow />
                        </Button>
                    </InputGroup>
                </div>
            </div>
        </div>
    );
};

export default Footer;