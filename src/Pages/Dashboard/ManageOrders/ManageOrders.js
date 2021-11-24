import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import swal from 'sweetalert';
import './ManageOrder.css'

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('https://carmart-server.herokuapp.com/orders')
            .then(res => setOrders(res.data))
    }, []);

    const handleStatusChange = (id, status) => {
        let modifiedOrders = [];
        orders.forEach(order => {
            if (order._id === id) {
                order.status = status;
            }
            modifiedOrders.push(order);
        })
        setOrders(modifiedOrders)
        const modifiedStatus = { id, status };
        axios.put('https://carmart-server.herokuapp.com/orders', modifiedStatus)
            .then(res => {
                if (res.data.modifiedCount) {
                    toast.success(`Status changed to ${status}`)
                }
            });
    }

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
                    const remainingOrders = orders.filter(order => order._id !== id);
                    axios.delete(`https://carmart-server.herokuapp.com/orders/${id}`)
                        .then(res => {
                            if (res.data.deletedCount) {
                                setOrders(remainingOrders);
                                toast.success('Deleted Successfully')
                            }
                        });
                }
            });
    }

    return (
        <div className="section-bg">
            <div className="pt-5 px-5">
                <Table striped bordered hover responsive>
                    <thead style={{ color: "#f0151f" }}>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Car Model</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontWeight: "500" }}>
                        {
                            orders.map((order, index) => (
                                <tr key={order._id}>
                                    <td>{index + 1}</td>
                                    <td>{order.name}</td>
                                    <td>{order.car.name}</td>
                                    <td>
                                        <select
                                            className={order.status === "Pending" ? "btn btn-warning" : order.status === "Shipped" ? "btn btn-info" : order.status === "Delivered" ? "btn btn-success" : "btn btn-danger"}
                                            defaultValue={order.status}
                                            onChange={e => handleStatusChange(order._id, e.target.value)}>
                                            <option className="bg-white text-muted">Pending</option>
                                            <option className="bg-white text-muted">Shipped</option>
                                            <option className="bg-white text-muted">Delivered</option>
                                            <option className="bg-white text-muted">Rejected</option>
                                        </select>
                                    </td>
                                    <td>
                                        <Button onClick={() => handleDelete(order._id)} variant="danger"><FaTrashAlt /></Button>
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

export default ManageOrders;