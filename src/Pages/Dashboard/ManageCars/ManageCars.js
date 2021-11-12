import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import swal from 'sweetalert';

const ManageCars = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/cars')
            .then(res => setCars(res.data))
    }, []);

    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Are you sure you want to delete this order?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const remainingCars = cars.filter(car => car._id !== id);
                    axios.delete(`http://localhost:5000/cars/${id}`)
                        .then(res => {
                            if (res.data.deletedCount) {
                                setCars(remainingCars);
                                toast.success('Deleted Successfully')
                            }
                        });
                }
            });
    }


    return (
        <div className="section-bg">
            <div className="pt-5 ms-280">
                <Table striped bordered hover responsive>
                    <thead style={{ fontWeight: "700", color: "#f0151f" }}>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Car Model</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontWeight: "600" }}>
                        {
                            cars.map((car, index) => (
                                <tr key={car._id}>
                                    <td>{index + 1}</td>
                                    <td><img width="100px" src={car.img} alt="" /></td>
                                    <td>{car.name}</td>
                                    <td>${car.price}</td>
                                    <td>
                                        <Button onClick={() => handleDelete(car._id)} variant="danger"><FaTrashAlt /></Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageCars;