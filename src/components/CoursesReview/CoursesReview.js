import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CourseReview from '../CourseReview/CourseReview';

const CoursesReview = () => {
    const [coursesReview, setCoursesReview] = useState([])
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setCoursesReview(data.slice(0, 4)))
    }, [])
    return (
        <div className="container">
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    coursesReview.map(course => <CourseReview
                        key={course._id}
                        course={course}
                    ></CourseReview>)
                }
            </Row>
        </div>
    );
};


export default CoursesReview;