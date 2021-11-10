import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './FeaturedCar.css'

const FeaturedCar = () => {
    return (
        <div className="container py-2 my-5 w-80" id="tour-package">
            <div className="my-5 text-center pb-2">
                <h2 className="section-title">Featured Cars</h2>
                <p className="section-description">this car are featured by their popularity and features</p>
            </div>
            <div>
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <Col>
                            <Fade bottom duration={2500} distance="40px">
                                <Card className="car-box">
                                    <div className="car-img">
                                        <Card.Img variant="top" src="https://storage.googleapis.com/theme-vessel-items/checking-sites/cmart-2-html/HTML/main/img/car/car-2.jpg" />
                                    </div>
                                    <Card.Body>
                                        <div className="d-flex justify-content-between mt-2 my-2">
                                            <Card.Title className="car-title">Toyota Prius</Card.Title>
                                            <Card.Title className="car-price">$850.00</Card.Title>
                                        </div>
                                        <Card.Text className="car-description">
                                            Prius Prime offers the best of both worlds: impressive fuel economy and the flexibility of electric charging. Discover how much you can save with this plug-in hybrid’s ability to drive solely on electricity
                                        </Card.Text>
                                        <button className="btn-regular rounded">Buy Now</button>
                                    </Card.Body>
                                </Card>
                            </Fade>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default FeaturedCar;