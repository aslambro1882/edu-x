import CoursesReview from '../CoursesReview/CoursesReview';
import TeachersReview from '../TeachersReview/TeachersReview';
import './Home.css'

const Home = () => {
    return (

        <div className="">
            <div className="title-banner d-flex flex-column justify-content-center align-items-center">
                <h1 className="fw-bold text-warning">Welcome to Edu-X</h1>
                <p className="bg-white rounded-3 p-2 fw-bold">You can learn here from best Teacher</p>
            </div>
            <div>
                <h2 className="bg-dark text-white p-3">Our Courses</h2>
                {/* Displaying Course Review */}
                <CoursesReview></CoursesReview>
            </div>
            <div>
                <h2 className="bg-dark text-white p-3">Our Teachers</h2>
                {/* Displaying Teacher Review */}
                <TeachersReview></TeachersReview>
            </div>

        </div>

    );
};

export default Home;