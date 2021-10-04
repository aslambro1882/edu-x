import React from 'react';
import './AboutUS.css'

const AboutUS = () => {
    return (
        <div className="d-flex w-75 mx-auto my-5">
            <div className="w-100">
                <img className="img-fluid" src="https://image.freepik.com/free-vector/young-programmer-businessman-freelance-working-desk-with-laptop_40876-2661.jpg" alt="" />
            </div>
            <div className="w-100 p-3 d-flex flex-column align-items-center justify-content-center">
                <h2>About US</h2>
                <p>
                    Edu-X, or electronic learning, is the delivery of learning and training through digital resources. Although Edu-X is based on formalized learning, it is provided through electronic devices such as computers, tablets and even cellular phones that are connected to the internet. E-learning definition is defined as providing Training and development to the Students/Employees through various Electronic media such as the Internet, audio, video etc. Web-based learning is meant by e-learning which commonly referred to as electronic learning or Virtual learning.
                </p>
            </div>
        </div>
    );
};

export default AboutUS;