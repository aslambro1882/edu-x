import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import TeacherReview from '../TeacherReview/TeacherReview';

const TeachersReview = () => {
    const [teachersReview, setTeachersReview] = useState([])
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setTeachersReview(data.slice(0, 6)))
    }, [])
    return (
        <div className="container">
            <Row xs={1} md={3} lg={6} className="g-3">
                {
                    teachersReview.map(teacher => <TeacherReview
                        key={teacher._id}
                        teacher={teacher}
                    ></TeacherReview>)
                }
            </Row>
        </div>
    );
};

export default TeachersReview;