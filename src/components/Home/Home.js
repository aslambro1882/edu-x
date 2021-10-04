import Courses from '../Courses/Courses';
import Teachers from '../Teachers/Teachers';
import './Home.css'

const Home = () => {



    return (

        <div className="">
            <div className="title-banner d-flex flex-column justify-content-center align-items-center">
                <h1 className="fw-bold">Welcome to Edu-X</h1>
                <p className="bg-white rounded-3 p-2 fw-bold">You can learn here from best Teacher</p>
            </div>
            <div>
                <h2 className="bg-dark text-white p-3">Our Courses</h2>
                <Courses></Courses>
            </div>
            <div>
                <h2 className="bg-dark text-white p-3">Out Teacher</h2>
                <Teachers></Teachers>
            </div>

        </div>

    );
};

export default Home;