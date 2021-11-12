import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { MdDashboard, MdManageAccounts, MdNoteAdd, MdLogout, MdPersonAddAlt1, MdPayment, MdReviews } from 'react-icons/md';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { GoListUnordered } from 'react-icons/go';
import { IoCarSportSharp } from 'react-icons/io5';
import './Navbar.css';
import { IconContext } from 'react-icons';
import DashboardHome from '../DashboardHome/DashboardHome';
import OrderList from '../OrderList/OrderList';
import ManageOrders from '../ManageOrders/ManageOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddNewCar from '../AddNewCar/AddNewCar';
import useAuth from '../../../hooks/useAuth';
import Payment from '../Payment/Payment';
import AddReview from '../AddReview/AddReview';
import ManageCars from '../ManageCars/ManageCars';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);
    let { path, url } = useRouteMatch();
    const { logOut, admin } = useAuth();

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='dashboard-navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'dashboard-nav active' : 'dashboard-nav'}>
                    <ul className='dashboard-nav-items'>
                        <li className='dashboard-nav-toggle' onClick={showSidebar}>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to={`${url}`}>
                                <MdDashboard />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        {
                            !admin ?
                                <>
                                    <li className="nav-text">
                                        <Link to={`${url}/payment`}>
                                            <MdPayment />
                                            <span>Payment</span>
                                        </Link>
                                    </li>
                                    <li className="nav-text">
                                        <Link to={`${url}/orders`}>
                                            <GoListUnordered />
                                            <span>My Orders</span>
                                        </Link>
                                    </li>
                                    <li className="nav-text">
                                        <Link to={`${url}/review`}>
                                            <MdReviews />
                                            <span>Add Review</span>
                                        </Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-text">
                                        <Link to={`${url}/manage-orders`}>
                                            <MdManageAccounts />
                                            <span>Manage Orders</span>
                                        </Link>
                                    </li>
                                    <li className="nav-text">
                                        <Link to={`${url}/manage-cars`}>
                                            <IoCarSportSharp />
                                            <span>Manage Cars</span>
                                        </Link>
                                    </li>
                                    <li className="nav-text">
                                        <Link to={`${url}/make-admin`}>
                                            <MdPersonAddAlt1 />
                                            <span>Make Admin</span>
                                        </Link>
                                    </li>
                                    <li className="nav-text">
                                        <Link to={`${url}/add-car`}>
                                            <MdNoteAdd />
                                            <span>Add New Car</span>
                                        </Link>
                                    </li>
                                </>
                        }
                        <li className="nav-text">
                            <Link to="/home">
                                <AiIcons.AiFillHome />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link onClick={logOut} to="/">
                                <MdLogout />
                                <span>Log Out</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
            <Switch>
                <Route exact path={path}>
                    <DashboardHome />
                </Route>
                <Route path={`${path}/payment`}>
                    <Payment />
                </Route>
                <Route path={`${path}/orders`}>
                    <OrderList />
                </Route>
                <Route path={`${path}/review`}>
                    <AddReview />
                </Route>
                <Route path={`${path}/manage-orders`}>
                    <ManageOrders />
                </Route>
                <Route path={`${path}/make-admin`}>
                    <MakeAdmin />
                </Route>
                <Route path={`${path}/add-car`}>
                    <AddNewCar />
                </Route>
                <Route path={`${path}/manage-cars`}>
                    <ManageCars />
                </Route>
            </Switch>

        </>
    );
};

export default Navbar;