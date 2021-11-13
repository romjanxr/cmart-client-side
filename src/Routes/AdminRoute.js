import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    if (isLoading) {
        return <div className="text-center mt-5"><Spinner animation="border" variant="danger" /></div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email && admin ? children :
                <Redirect
                    to={{
                        pathname: "/dashboard",
                        state: { from: location }
                    }}
                />
            }
        >

        </Route>
    );
};

export default AdminRoute;