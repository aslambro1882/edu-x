import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <Row xs={1} md={3} lg={4} className="g-3 w-75 mx-auto h-100">
            {
                teachers.map(teacher => <Teacher
                    key={teacher._id}
                    teacher={teacher}
                ></Teacher>)
            }
        </Row>
    );
};

export default Teachers;