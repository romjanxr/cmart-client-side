import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="section-bg">
            <Container style={{ maxWidth: "30rem" }} className="pt-5">
                <Card className="border-0 shadow">
                    <Card.Header as={"h4"} className="text-center border-0 mt-1 fw-bold">Wellcome!!</Card.Header>
                    <Card.Body>
                        <div className="d-flex flex-column align-items-center text-center">
                            <img src={user.photoURL} alt="Admin" className="rounded-circle" width="150" />
                            <div className="mt-3">
                                <h4 className="fs-4 fw-bold">{user.displayName}</h4>
                                <p className="text-secondary mb-1">{user.email}</p>
                            </div>
                            <Button onClick={logOut} className="px-4 py-2 rounded mt-2 text-white btn-main">Logout</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default DashboardHome;