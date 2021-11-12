import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
const axios = require('axios').default;

const AddNewCar = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const loading = toast.loading('Please wait...');
        const { name, description, price, img } = data;
        if (name && description && price && img) {
            axios.post('http://localhost:5000/cars', data)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.dismiss(loading);
                        toast.success('New Car Added Successfully')
                        reset();
                    }
                });
        }
        else {
            toast.dismiss(loading);
            toast.error('Please insert required details')
        }
    }

    return (
        <div className="section-bg d-flex align-items-center justify-content-center">
            <div className="w-40 bg-white rounded shadow d-flex align-items-center justify-content-center">
                <div className="w-100">
                    <div className="text-center mb-4">
                        <h3 className="fw-bold">Create An Account</h3>
                    </div>
                    <div className="mt-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Car Name"
                                className="mb-3">
                                <Form.Control type="text" {...register("name")} placeholder="Car Name" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Car Description"
                                className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    style={{ height: '120px' }}
                                    {...register("description")} placeholder="Package Description"
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Car Price"
                                className="mb-3">
                                <Form.Control type="text" {...register("price")} placeholder="Car Price" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Image URL"
                                className="mb-3">
                                <Form.Control type="text" {...register("img")} placeholder="Car Image" />
                            </FloatingLabel>
                            <button type="submit" className="btn-regular w-100 mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddNewCar;