import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    // Loading Data From JSON
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        // Using React Boostrap Card
        <div className="container my-5">
            <Row xs={1} md={3} lg={6} className="g-3">
                {
                    teachers.map(teacher => <Teacher
                        key={teacher._id}
                        teacher={teacher}
                    ></Teacher>)
                }
            </Row>
        </div>
    );
};

export default Teachers;