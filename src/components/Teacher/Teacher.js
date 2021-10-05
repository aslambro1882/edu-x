import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Teacher.css'

const Teacher = (props) => {
    const { teacher } = props;
    const { insImg, Instructor, Degree } = teacher;
    return (
        // Cards Here
        <Col>
            <Card>
                <Card.Img className='rounded-circle p-5 img-size' variant="top" src={insImg} />
                <Card.Body>
                    <Card.Title className='text-center'>{Instructor}</Card.Title>
                    <Card.Text className='text-center'>{Degree}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Teacher;