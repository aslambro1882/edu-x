import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import './ContactUS.css'

const ContactUS = () => {
    return (
        <div className="d-flex justify-content-center align-items-center full-view">
            <div className="w-50 mx-auto my-5">
                <FloatingLabel controlId="floatingTextarea" label="Enter Your Email" className="mb-3">
                    <Form.Control as="textarea" placeholder="Mail" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Write US">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '200px' }}
                    />
                </FloatingLabel>
                <Button className="mt-3 w-50 d-block mx-auto fw-bold" variant="info">Send</Button>
            </div>
        </div>
    );
};

export default ContactUS;