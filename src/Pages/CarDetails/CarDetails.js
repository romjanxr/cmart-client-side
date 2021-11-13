import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Shared/Header/Header';
import { useForm } from "react-hook-form";
import { FloatingLabel, Form } from 'react-bootstrap';
import './CarDetails.css'
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        axios.get(`https://carmart-server.herokuapp.com/cars/${id}`)
            .then(res => setCar(res.data))
    }, [id])

    const onSubmit = data => {
        const loading = toast.loading('Please wait...');
        const { name, email, address, phone } = data
        if (name && email && address && phone) {
            data.status = 'Pending';
            axios.post('https://carmart-server.herokuapp.com/orders', { ...data, car })
                .then(res => {
                    if (res.data.insertedId) {
                        toast.dismiss(loading);
                        toast.success('Order Placed Successfully')
                        reset();
                    }
                })
        }
        else {
            toast.dismiss(loading);
            toast.error('Please insert required details')
        }


    };



    return (
        <div>
            <Header />
            <div className="sub-banner">
                <h2><i>Car Details &amp; Order</i></h2>
            </div>
            <div className="section-bg">
                <div className="row w-80 mx-auto py-5 g-4">
                    <div className="col-md-7">
                        <img className="img-fluid" src={car.img} alt="" />
                        <h3 className="section-title my-4">{car.name}</h3>
                        <h3 className="car-price mb-3">Price: ${car.price}</h3>
                        <h3 className="mb-3 fw-bold">Description</h3>
                        <p>{car.description}</p>
                    </div>
                    <div className="col-md-5">
                        <div className="bg-white p-5 shadow rounded">
                            <h3 className="text-center fw-bold mb-4">Order This Car</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FloatingLabel
                                    label="Your Name"
                                    className="mb-3">
                                    {
                                        user.email && <Form.Control
                                            defaultValue={user.displayName}
                                            type="text" {...register("name")} placeholder="Your Name" />
                                    }
                                </FloatingLabel>

                                <FloatingLabel
                                    label="Your Email"
                                    className="mb-3">
                                    {
                                        user.email && <Form.Control
                                            value={user.email}
                                            type="text" {...register("email")} placeholder="Your Email"
                                        />
                                    }
                                </FloatingLabel>

                                <FloatingLabel
                                    label="Your Address"
                                    className="mb-3">
                                    <Form.Control
                                        type="text"
                                        {...register("address")} placeholder="Your Address"
                                    />
                                </FloatingLabel>

                                <FloatingLabel
                                    label="Phone Number"
                                    className="mb-3">
                                    <Form.Control type="text" {...register("phone")} placeholder="Phone Number" />
                                </FloatingLabel>
                                <button type="submit" className="btn-regular w-100 mt-3">Order Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;