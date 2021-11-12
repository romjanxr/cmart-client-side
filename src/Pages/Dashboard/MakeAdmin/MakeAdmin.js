import axios from 'axios';
import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const loading = toast.loading('Please wait...');
        axios.put('http://localhost:5000/users/admin', data)
            .then(res => {
                if (res.data.modifiedCount) {
                    toast.dismiss(loading);
                    toast.success('Admin Added Successfully')
                    reset();
                }
                else {
                    toast.dismiss(loading);
                    toast.error('User not exist')
                }
            });
    };

    return (
        <div className="section-bg d-flex align-items-center justify-content-center">
            <div className="w-40 bg-white rounded shadow d-flex align-items-center justify-content-center">
                <div className="w-100 text-center">
                    <h2 className="mb-5">Make An Admin</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FloatingLabel
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        </FloatingLabel>
                        <button className="btn-regular w-100 mt-3">Make Admin</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;