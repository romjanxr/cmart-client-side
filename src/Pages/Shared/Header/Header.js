import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import logoblack from '../../../images/logoblack.png'
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);

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
                            to="/#tour-package"
                            className={(isSticky || isCollapsed) ? "text-dark me-3" : "text-white me-3"}>
                            Our Packages
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

                        <>
                            <Nav.Link
                                as={NavLink}
                                to="/login"
                                className="btn-main text-white px-4 me-3 rounded-pill">
                                Log in
                            </Nav.Link>
                        </>
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
                                        src="https://lh3.googleusercontent.com/a/AATXAJxqntyGV5_TBzxtFXy1reOUBQZC_1Qa4d6eYe7K5w=s96-c"
                                        alt=""
                                    />
                                }
                            >
                                <div className="text-center py-4 px-3">
                                    <h6>Romjan Ali</h6>
                                    <p className="my-2">romjanvr5@gmail.com</p>
                                    <button className="btn-regular">
                                        Sign Out
                                    </button>
                                </div>
                            </NavDropdown>
                        </>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;