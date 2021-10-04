import Courses from '../Courses/Courses';
import Teachers from '../Teachers/Teachers';
import './Home.css'

const Home = () => {
    for (let i = 0; i <= 4; i++) {
        <Courses></Courses>
    }
    const number = 4;


    return (

        <div className="">
            <div className="title-banner d-flex flex-column justify-content-center align-items-center">
                <h1 className="fw-bold">Welcome to Edu-X</h1>
                <p className="bg-white rounded-3 p-2 fw-bold">You can learn here from best Teacher</p>
            </div>
            <div>
                <h2>Our Courses</h2>

                {number ? <Courses></Courses> : 0}
            </div>
            <div>
                <h2>Out Teacher</h2>
                <Teachers></Teachers>
            </div>

        </div>

    );
};

export default Home;