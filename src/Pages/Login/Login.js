import React, { useEffect } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './Login.css'
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { handleUserLogin, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const onSubmit = data => {
        handleUserLogin(data.email, data.password, location, history)
    };

    useEffect(() => {
        document.title = "Cmart | Login"
    }, []);

    return (
        <div className="section-bg d-flex align-items-center justify-content-center">
            <div className="w-40 bg-white rounded shadow d-flex align-items-center justify-content-center">
                <div className="w-100">
                    <div className="text-center mb-4">
                        <h3 className="fw-bold">Sign Into Your Account</h3>
                    </div>
                    <div className="mt-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FloatingLabel
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                            </FloatingLabel>
                            <FloatingLabel
                                label="Password">
                                <Form.Control type="password" placeholder="Your Password" {...register("password", { required: true, maxLength: 20 })} />
                            </FloatingLabel>
                            <button className="btn-regular w-100 mt-3">Login</button>
                        </form>
                        <button onClick={() => signInUsingGoogle(location, history)} className="google-btn my-4"><FcGoogle className="fs-4 me-1 mb-1" /> Sign In With Google</button>
                        <p className="login-text">Don't have an account? <NavLink to="/register">Register here</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;