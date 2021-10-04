import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const insta = <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
    const facebook = <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
    const link = <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
    return (
        <div className="footer">
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
                    <Link to="./home"><Button variant="outline-warning" className="mx-2">Home</Button></Link>
                    <Link to="./courses"><Button variant="outline-warning" className="mx-2">Courses</Button></Link>
                    <Link to="./teacher"><Button variant="outline-warning" className="mx-2">Teacher</Button></Link>
                    <Link to="./about"><Button variant="outline-warning" className="mx-2">About US</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;