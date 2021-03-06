import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
    // Data loading from JSON
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        // Using React Boostrap Cards 
        <div className="container my-5">
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    courses.map(course => <Course
                        key={course._id}
                        course={course}
                    ></Course>)
                }
            </Row>
        </div>
    );
};

export default Courses;