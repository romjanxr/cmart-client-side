import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import logoblack from '../../../images/logoblack.png'
import logo from '../../../images/logo.png'
import './Header.css'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);
    const { user, logOut } = useAuth();
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            fixed="top"
            className={(isSticky || isCollapsed) ? "shadow-sm bg-white py-2" : "py-3 header"}>
            <Container>
                <Navbar.Brand as={NavLink} to="/home">
                    <img height="50px" src={(isSticky || isCollapsed) ? logoblack : logo} alt="Logo" />
                </Navbar.Brand>

                <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'collapseBg' : null)} aria-controls="responsive-navbar-nav">
                    <GiHamburgerMenu color={(isSticky || isCollapsed) ? "black" : "white"} />
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link
                            as={NavLink}
                            to="/home"
                            className={(isSticky || isCollapsed) ? "text-dark me-3" : "text-white me-3"}>
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/explore-cars"
                            className={(isSticky || isCollapsed) ? "text-dark me-3" : "text-white me-3"}>
                            Explore Cars
                        </Nav.Link>

                        <Nav.Link
                            as={NavLink}
                            to="/#about"
                            className={(isSticky || isCollapsed) ? "text-dark me-3" : "text-white me-3"}>
                            About
                        </Nav.Link>

                        <Nav.Link
                            as={NavLink}
                            to="/#contact"
                            className={(isSticky || isCollapsed) ? "text-dark me-3" : "text-white me-3"}>
                            Contact
                        </Nav.Link>
                        {
                            !user?.email ?
                                <>
                                    <Nav.Link
                                        as={NavLink}
                                        to="/login"
                                        className="btn-main text-white px-4 me-3 rounded-pill">
                                        Log in
                                    </Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link
                                        as={NavLink}
                                        to="/dashboard"
                                        className={(isSticky || isCollapsed) ? "text-dark me-3" : "text-white me-3"}>
                                        Dashboard
                                    </Nav.Link>
                                    <NavDropdown
                                        align="end"
                                        title={
                                            <img
                                                style={{
                                                    width: "40px",
                                                    borderRadius: "50%",
                                                }}
                                                src={user.photoURL}
                                                alt=""
                                            />
                                        }
                                    >
                                        <div className="text-center py-4 px-3">
                                            <h6>{user.displayName}</h6>
                                            <p className="my-2">{user.email}</p>
                                            <button onClick={logOut} className="btn-main text-white py-2 px-3 rounded mt-2">
                                                Sign Out
                                            </button>
                                        </div>
                                    </NavDropdown>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;