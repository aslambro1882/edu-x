import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <Row md={2} lg={4} className="g-4 w-75 mx-auto">
            {
                courses.map(course => <Course
                    key={course._id}
                    course={course}
                ></Course>)
            }
        </Row>
    );
};

export default Courses;