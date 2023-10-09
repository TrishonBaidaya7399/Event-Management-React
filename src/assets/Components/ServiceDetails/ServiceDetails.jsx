import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceDetails = () => {
  const [bookNow, setBookNow] = useState(false);
  const { id } = useParams();
  const eventdata = useLoaderData();
  const selectedEvent = eventdata.find((Event) => Event.id === id);
  const { img, price, title, longDescription } = selectedEvent;

  const handleBookNow = () => {
    setBookNow(true);
    toast.success("Booking Successful!");
  };

  return (
    <div className="mx-auto lg:w-[70%]">
      <div className="p-4 my-6 flex flex-col items-center justify-center">
        <img className="w-full rounded-lg" src={img} alt="" />
        <h1 className="title text-4xl text-center text-pink-600 font-bold mt-6 mb-4">
          {title}
        </h1>
        <p className="text-xl font-semibold text-gray-500 mb-4 text-center lg:mx-12">
          {longDescription}
        </p>
        <p className="text-2xl text-gray-700 font-bold">
          Price: <span className="text-pink-600 font-bold">{price}</span>
        </p>
        {bookNow ? (
          <button
            className="bg-pink-600 text-white border-2 border-pink-600 font-semibold text-xl p-4 rounded-lg my-4"
            disabled
          >
            Booked
          </button>
        ) : (
          <button
            onClick={handleBookNow}
            className="bg-white text-pink-600 border-2 border-pink-600 font-semibold text-xl p-4 rounded-lg my-4"
          >
            Book Now
          </button>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ServiceDetails;
