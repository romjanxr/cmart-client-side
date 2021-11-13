import axios from 'axios';
import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import './AddReview.css'


const AddReview = () => {
    const { user } = useAuth();
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.star = rating;
        data.img = user.photoURL;
        const loading = toast.loading('Please Wait...')
        const { name, feedback, star } = data;
        if (name && feedback && star) {
            axios.post('https://carmart-server.herokuapp.com/reviews', data)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.dismiss(loading);
                        toast.success('Review Added Successfully');
                        reset();
                    }
                })
        }
        else {
            toast.dismiss(loading);
            toast.error('Please insert required field')
        }
    };

    return (
        <div className="section-bg d-flex align-items-center justify-content-center">
            <div className="w-40 bg-white rounded shadow d-flex align-items-center justify-content-center">
                <div className="w-100">
                    <div className="text-center mb-4">
                        <h3 className="fw-bold">Add A Review</h3>
                    </div>
                    <div className="mt-3">
                        <div>
                            <h5>Rate Us</h5>
                            <div className="mb-4 mt-3">
                                {[...Array(5)].map((star, index) => {
                                    const ratingValue = index + 1;
                                    return (
                                        <label key={index}>
                                            <input
                                                type="radio"
                                                className="radio-input"
                                                name="rating"
                                                value={ratingValue}
                                                onClick={() => setRating(ratingValue)}
                                            />
                                            <FaStar
                                                className="star"
                                                color={ratingValue <= (hover || rating) ? "gold" : "#e5e5e5"}
                                                size={25}
                                                onMouseEnter={() => setHover(ratingValue)}
                                                onMouseLeave={() => setHover(null)}
                                            />
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Your Name"
                                className="mb-3">
                                <Form.Control type="text" {...register("name")} placeholder="Your Name" value={user.displayName} />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Your Feedback"
                                className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    style={{ height: '120px' }}
                                    {...register("feedback")} placeholder="Your Feedback"
                                />
                            </FloatingLabel>
                            <button type="submit" className="btn-regular w-100 mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddReview;