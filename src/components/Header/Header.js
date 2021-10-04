import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className='d-flex justify-content-around bg-dark py-3'>
            <h2 className='text-white'>Edu-X</h2>
            <div>
                <NavLink className='me-5' to='/home'><Button variant="outline-warning">Home</Button></NavLink>
                <NavLink className='me-5' to='/courses'><Button variant="outline-warning">Courses</Button></NavLink>
                <NavLink className='me-5' to='/teachers'><Button variant="outline-warning">Teachers</Button></NavLink>
                <NavLink className='me-5' to='/about'><Button variant="outline-warning">About US</Button></NavLink>
            </div>
        </div>
    );
};

export default Header;