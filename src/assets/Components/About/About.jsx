// import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";


const About = () => {
    return (
        <div className=" py-12 bg-pink-100">
             <h1 className="text-4xl font-bold text-pink-600 text-center">About Us</h1>
            <p className="text-center text-xl font-semibold md:mb-12 mt-6">Our mission is to transform your special occasions into unforgettable memories</p>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-8">
                  <img src="https://i.ibb.co/m6XZj1C/event14.jpg" className=" md:max-w-lg rounded-lg shadow-2xl" />
                    <div className="flex flex-col items-center lg:items-start">
                      <h1 className="text-3xl md:text-4xl text-center lg:text-left lg:text-5xl font-bold text-pink-600" >We will give a special celebration for you</h1>
                      <p className="py-6 text-center lg:text-left">At <span className="text-pink-600 text-xl font-bold">Tevents</span>, we are dedicated to making your special occasions truly unforgettable. With a passion for celebration and attention to detail, we provide a wide range of services designed to elevate your events. Whether it is a wedding, corporate gathering, or any special moment, we are here to create moments that last a lifetime. Experience the difference with Tevents.</p>
                      <NavLink to="/about"><button className="btn bg-pink-600 text-white text-xl">More</button></NavLink>
                    </div>
                 </div>
            </div>
        </div>
    );
};

About.propTypes = {
    
};

export default About;