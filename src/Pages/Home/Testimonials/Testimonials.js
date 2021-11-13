import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';
import './Testimonial.css'
import axios from 'axios';

const Testimonials = () => {
    SwiperCore.use([Pagination, Autoplay]);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('https://carmart-server.herokuapp.com/reviews')
            .then(res => setReviews(res.data))
    }, [])

    return (
        <div className="testimonial-bg py-5">
            <Fade bottom duration={2500} distance="40px">
                <div className="container w-80" id="tour-package">
                    <div className="my-5 text-center pb-2">
                        <h2 className="section-title">Testimonials</h2>
                        <p className="section-description">Let's see what our client says about us</p>
                    </div>
                    <div>
                        <Swiper
                            loop={true}
                            pagination={{ clickable: true }}
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 2,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            spaceBetween={10}
                        >
                            {reviews.map((review) => (
                                <SwiperSlide key={review._id}>
                                    <Card className="my-4 review-card">
                                        <Card.Img className="review-img" variant="top" src={review.img} />
                                        <Card.Body className="text-center">
                                            <h3 className="review-name mt-3">{review.name}</h3>
                                            <p className="my-2">
                                                <span>
                                                    {
                                                        [...Array(review.star)].map((_, i) => <AiFillStar key={i} color="gold" size={20} />)
                                                    }
                                                </span>
                                                <span style={{ margin: '0' }}>
                                                    {
                                                        [...Array(5 - review.star)].map((_, i) => <AiOutlineStar key={i} color="gold" size={20} />)
                                                    }
                                                </span>
                                            </p>
                                            <Card.Text className="review-message">{review.feedback.slice(0, 150)}</Card.Text>
                                        </Card.Body>
                                    </Card>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Testimonials;