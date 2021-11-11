import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Header from '../Shared/Header/Header';
import './ExploreCars.css'

const ExploreCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/cars')
            .then(res => setCars(res.data))
    }, []);

    return (
        <div>
            <Header />
            <div className="sub-banner">
                <h2><i>Explore Cars</i></h2>
            </div>
            <div className="container py-2 my-5 w-80">
                <div>
                    <Row xs={1} md={3} className="g-4">
                        {cars.map((car) => (
                            <Col key={car._id}>
                                <Fade bottom duration={2500} distance="40px">
                                    <Card className="car-box">
                                        <div className="car-img">
                                            <Card.Img variant="top" src={car.img} />
                                        </div>
                                        <Card.Body>
                                            <div className="d-flex justify-content-between mt-2 my-2">
                                                <Card.Title className="car-title">{car.name}</Card.Title>
                                                <Card.Title className="car-price">${car.price}</Card.Title>
                                            </div>
                                            <Card.Text className="car-description">
                                                {car.description.slice(0, 140)}
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
        </div>
    );
};

export default ExploreCars;