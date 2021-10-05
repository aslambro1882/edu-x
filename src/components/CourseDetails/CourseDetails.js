import { faClock, faComment, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './CourseDetails.css'

const CourseDetails = () => {



    const time = <FontAwesomeIcon icon={faClock} />
    const like = <FontAwesomeIcon icon={faThumbsUp} />
    const dislike = <FontAwesomeIcon icon={faThumbsDown} />
    const comment = <FontAwesomeIcon icon={faComment} />


    const { courseId } = useParams();
    console.log(courseId);


    const [courseDetails, setCourseDetails] = useState([])


    useEffect(() => {
        fetch('./../fakedata.JSON')
            .then(res => res.json())
            .then(data => setCourseDetails(data))
    }, [])
    console.log(courseDetails);

    const data = courseDetails.find(cd => cd._id.includes(courseId))
    // const { img, description, course_name, duration, likes, dislikes, comments, id } = data;
    console.log(data);
    return (
        <div className="detail-page d-flex justify-content-center align-items-center">
            <Row xs={1} sm={2} className="d-flex justify-content-center align-items-center">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={data?.img} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>{data?.course_name}</Card.Title>
                            <Card.Text>{data?.description}</Card.Text>
                            <Card.Text className="text-primary d-flex justify-content-between">
                                <p>{time} {data?.duration}</p>
                                {/* <p className="text-warning">{premium}</p> */}
                            </Card.Text>
                            <Card.Text className="d-flex justify-content-between text-secondary">
                                <p>{like} {data?.likes}</p>
                                <p>{dislike} {data?.dislikes}</p>
                                <p>{comment} {data?.comments}</p>
                            </Card.Text>
                            {/* <Card.Text className="text-center"><Link to={url}><Button>See Details</Button></Link></Card.Text> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default CourseDetails;