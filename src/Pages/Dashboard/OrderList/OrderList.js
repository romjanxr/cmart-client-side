import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        axios.get(`https://carmart-server.herokuapp.com/orders?email=${user.email}`)
            .then(res => {
                setOrders(res.data)
            })
    }, [user.email]);

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
                            orders.map((order, index) => (
                                <tr key={order._id}>
                                    <td>{index + 1}</td>
                                    <td>{order.name}</td>
                                    <td>{order.car.name}</td>
                                    <td className={order.status === "Pending" ? "text-warning" : order.status === "Shipped" ? "text-info" : order.status === "Delivered" ? "text-success" : "text-danger"}>
                                        {order.status}
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

export default OrderList;