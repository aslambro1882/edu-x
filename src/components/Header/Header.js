import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div>

            <Navbar bg="dark" expand="md">
                <Container>
                    <Navbar.Brand className="text-white fs-1 fw-bold" href="/home">Edu-<span className="text-warning">X</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className='me-2' to='/home'><Button variant="outline-warning">Home</Button></NavLink>
                            <NavLink className='me-2' to='/courses'><Button variant="outline-warning">Courses</Button></NavLink>
                            <NavLink className='me-2' to='/teacher'><Button variant="outline-warning">Teachers</Button></NavLink>
                            <NavLink className='me-2' to='/about'><Button variant="outline-warning">About US</Button></NavLink>
                            <NavLink className='me-2' to='/contact'><Button variant="outline-warning">Contact US</Button></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;