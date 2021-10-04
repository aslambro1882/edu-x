import { faClock, faComment, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PremiumContext } from '../../App';

const Course = (props) => {
    const { course } = props;
    const { img, description, course_name, duration, likes, dislikes, comments } = course;

    const time = <FontAwesomeIcon icon={faClock} />
    const like = <FontAwesomeIcon icon={faThumbsUp} />
    const dislike = <FontAwesomeIcon icon={faThumbsDown} />
    const comment = <FontAwesomeIcon icon={faComment} />

    const premium = useContext(PremiumContext)
    console.log(premium);
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} height="300px" />
                    <Card.Body>
                        <Card.Title>{course_name}</Card.Title>
                        <Card.Text>{description.slice(0, 100)}</Card.Text>
                        <Card.Text className="text-primary d-flex justify-content-between">
                            <p>{time} {duration}</p>
                            <p className="text-warning">{premium}</p>
                        </Card.Text>
                        <Card.Text className="d-flex justify-content-between text-secondary">
                            <p>{like} {likes}</p>
                            <p>{dislike} {dislikes}</p>
                            <p>{comment} {comments}</p>
                        </Card.Text>
                        <Card.Text className="text-center"><Link to='./courses'><Button>See Details</Button></Link></Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;