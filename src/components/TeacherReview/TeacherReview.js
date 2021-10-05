import React from 'react';
import { Card, Col } from 'react-bootstrap';


const TeacherReview = (props) => {
    const { teacher } = props;
    const { insImg, Instructor, Degree } = teacher;
    return (
        <div className='my-5'>
            <Col>
                <Card>
                    <Card.Img className='rounded-circle p-5 img-size' variant="top" src={insImg} height="220px" />
                    <Card.Body>
                        <Card.Title className='text-center'>{Instructor}</Card.Title>
                        <Card.Text className='text-center'>{Degree}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default TeacherReview;