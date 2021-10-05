import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    // Declaring Icons
    const insta = <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
    const facebook = <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
    const link = <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
    return (
        <div className="">
            <div className="bg-dark d-flex justify-content-around p-3">
                <div>
                    <h2 className="text-white">Follow Us on social Media</h2>
                    <div className="d-flex">
                        <p className="text-white fs-2 ms-2">{insta}</p>
                        <p className="text-white fs-2 ms-2">{facebook}</p>
                        <p className="text-white fs-2 ms-2">{link}</p>
                    </div>
                </div>
                <div>
                    <Link className="text-white ms-2" to="/home">Home</Link>
                    <Link className="text-white ms-2" to="/courses">Courses</Link>
                    <Link className="text-white ms-2" to="/teacher">Teachers</Link>
                    <Link className="text-white ms-2" to="/about">About US</Link>
                    <Link className="text-white ms-2" to="/contact">Contact US</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;