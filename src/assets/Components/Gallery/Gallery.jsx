// import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";

const Gallery = () => {
    return (
        <div className="lg:mx-[100px] my-12">
            <h1 className="text-4xl font-bold text-pink-600 text-center">Our Memories</h1>
            <p className="text-center text-xl font-semibold md:mb-12 mt-6">Step into a world of visual delight with our captivating gallery</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className=" p-2 h-[220px]">
                    <img src="https://i.ibb.co/kHkNbnq/Baby-shower-Party-planner.jpg" className="w-[95%] h-[180px] hover:w-[100%] hover:h-[200px] duration-300 border-2 border-pink-600 rounded-md" alt="" />
                </div>
                <div className=" p-2 h-[220px] ">
                    <img src="https://i.ibb.co/sV1MsNt/Anniversaries-Party-planner.jpg" className="w-[95%] h-[180px] hover:w-[100%] hover:h-[200px] duration-300 border-2 border-pink-600 rounded-md" alt="" />
                </div>
                <div className=" p-2 h-[220px] ">
                    <img src="https://i.ibb.co/ngRgngV/Birthday-Party-planner.jpg" className="w-[95%] h-[180px] hover:w-[100%] hover:h-[200px] duration-300 border-2 border-pink-600 rounded-md" alt="" />
                </div>
                <div className=" p-2 h-[220px] ">
                    <img src="https://i.ibb.co/84qr9Tp/carousel-img-01.jpg" className="w-[95%] h-[180px] hover:w-[100%] hover:h-[200px] duration-300 border-2 border-pink-600 rounded-md" alt="" />
                </div>
                <div className=" p-2 h-[220px] ">
                    <img src="https://i.ibb.co/QQzgP96/Engagement-party-planner.jpg" className="w-[95%] h-[180px] hover:w-[100%] hover:h-[200px] duration-300 border-2 border-pink-600 rounded-md" alt="" />
                </div>
                <div className=" p-2 h-[220px] ">
                    <img src="https://i.ibb.co/Z6BLtYM/Retirement-Party-planner.jpg" className="w-[95%] h-[180px] hover:w-[100%] hover:h-[200px] duration-300 border-2 border-pink-600 rounded-md" alt="" />
                </div>
                <div className=" p-2 h-[220px] ">
                    <img src="https://i.ibb.co/kHkNbnq/Baby-shower-Party-planner.jpg" className="w-[95%] h-[180px] hover:w-[100%] hover:h-[200px] duration-300 border-2 border-pink-600 rounded-md" alt="" />
                </div>
                <div className=" p-2 h-[220px] ">
                    <img src="https://i.ibb.co/sV1MsNt/Anniversaries-Party-planner.jpg" className="w-[95%] h-[180px] hover:w-[100%] hover:h-[200px] duration-300 border-2 border-pink-600 rounded-md " alt="" />
                </div>
            </div>
            <NavLink to="/gallery" className=" flex items-center justify-center mt-6">
            <button className="btn bg-[transparent] text-pink-600 text-center px-4 py-1 rounded-lg border-2 border-pink-600 hover:text-white hover:bg-pink-600 font-bold text-xl">See More</button>
            </NavLink>
        </div>
    );
};

Gallery.propTypes = {
    
};

export default Gallery;