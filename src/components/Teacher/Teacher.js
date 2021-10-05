import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Teacher = (props) => {
    const { teacher } = props;
    const { insImg, Instructor, Degree } = teacher;
    return (
        // Cards Here
        <Col>
            <Card>
                <Card.Img className='rounded-circle p-5' variant="top" src={insImg} height="220px" />
                <Card.Body>
                    <Card.Title className='text-center'>{Instructor}</Card.Title>
                    <Card.Text className='text-center'>{Degree}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Teacher;