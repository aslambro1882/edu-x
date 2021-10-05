import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AboutUS.css'

const AboutUS = () => {
    return (
        <div className="d-flex my-5 full-view container ">
            <Row xs={1} md={2}>
                <Col className="d-flex align-items-center justify-content-center">
                    <img className="img-fluid" src="https://image.freepik.com/free-vector/young-programmer-businessman-freelance-working-desk-with-laptop_40876-2661.jpg" alt="" />
                </Col>

                <Col className="d-flex flex-column align-items-center justify-content-center">
                    <h2>About US</h2>
                    <p>
                        Edu-X is the delivery of learning and training through digital resources. Although Edu-X is based on formalized learning, it is provided through electronic devices such as computers, tablets and even cellular phones that are connected to the internet. Edu-X definition is defined as providing Training and development to the Students/Employees through various Electronic media such as the Internet, audio, video etc. Web-based learning is meant by Edu-X which commonly referred to as Virtual learning.
                    </p>
                </Col>
            </Row>


        </div>


    );
};

export default AboutUS;