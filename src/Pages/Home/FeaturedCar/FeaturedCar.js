import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { useHistory } from 'react-router';
import './FeaturedCar.css'

const FeaturedCar = () => {
    const [cars, setCars] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('https://carmart-server.herokuapp.com/cars')
            .then(res => setCars(res.data))
    }, []);

    return (
        <div className="container py-2 my-5 w-80">
            <div className="my-5 text-center pb-2">
                <h2 className="section-title">Featured Cars</h2>
                <p className="section-description">this car are featured by their popularity and features</p>
            </div>
            <div>
                <Row xs={1} md={3} className="g-4">
                    {cars.slice(0, 6).map((car) => (
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
                                            {car.description.slice(0, 190)}
                                        </Card.Text>
                                        <button onClick={() => history.push(`/car/${car._id}`)} className="btn-regular rounded">Buy Now</button>
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