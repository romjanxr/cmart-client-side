import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';


const Dashboard = () => {
    useEffect(() => {
        document.title = "Cmart | Dashboard"
    }, []);


    return (
        <div>
            <Navbar />

        </div>
    );
};

export default Dashboard;