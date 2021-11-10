import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { AiFillStar } from 'react-icons/ai';
import './Testimonial.css'

const Testimonials = () => {
    return (
        <div className="testimonial-bg py-5">
            <div className="container w-80" id="tour-package">
                <div className="my-5 text-center pb-2">
                    <h2 className="section-title">Testimonials</h2>
                    <p className="section-description">Let's see what our client says about us</p>
                </div>
                <div>
                    <Row xs={1} md={3} className="g-4">
                        {Array.from({ length: 3 }).map((_, idx) => (
                            <Col>
                                <Fade bottom duration={2500} distance="40px">
                                    <Card className="my-4 review-card">
                                        <Card.Img className="review-img" variant="top" src="https://i.ibb.co/5GzXkwq/user.png" />
                                        <Card.Body className="text-center">
                                            <h3 className="review-name mt-3">Romjan Ali</h3>
                                            <span className="d-block my-3">
                                                <AiFillStar className="star-icon" />
                                                <AiFillStar className="star-icon" />
                                                <AiFillStar className="star-icon" />
                                                <AiFillStar className="star-icon" />
                                                <AiFillStar className="star-icon" />
                                            </span>
                                            <Card.Text className="review-message">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Fade>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;