// import PropTypes from 'prop-types';

import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const {id} = useParams();
    console.log(id);
    const eventdata = useLoaderData();
    console.log(eventdata);
    const selectedEvent = eventdata.find((Event)=> Event.id === id);
    console.log(selectedEvent);
    const {img, price, title,description}= selectedEvent;
    return (
        <div className="mx-auto w-[70%]">
        <div className="p-4 my-6 flex flex-col items-center justify-center">
            <img className="w-full rounded-lg" src={img} alt="" />
            <h1 className="title text-4xl text-pink-600 font-bold mt-6 mb-4">{title}</h1>
            <p className="text-xl font-semibold text-gray-400 text-center mx-12">{description}</p>
            <p className="text-xl text-gray-700 font-bold">Price: <span className="text-pink-600 font-bold">{price}</span></p>
            <button className="bg-pink-600 text-white font-semibold text-xl p-4 rounded-lg my-4">Book Now</button>

        </div>
        </div>
    );
};

ServiceDetails.propTypes = {
    
};

export default ServiceDetails;