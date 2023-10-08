import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Services = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('/Data/events.json')
      .then((response) => response.json())
      .then((data) => setEventsData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex flex-col md:my-12 mx-[20px] md:mx-[50px] lg:mx-[100px]">
      <h1 className="text-4xl font-bold text-pink-600 text-center">Our Services</h1>
      <p className="text-center text-xl font-semibold md:mb-12 mt-6">
        We provide our best services to make your function more delightful
      </p>
      <div className="card-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsData.map((event) => (
          <div key={event.id} className="card bg-pink-200 shadow-xl">
            <figure className="">
              <img src={event.img} alt="Event" className="rounded-t-lg w-full h-[250px]" />
            </figure>
            <div className="card-body text-left">
              <h2 className="card-title">{event.title}</h2>
              <p>{event.description}</p>
              <div className="card-actions">
                {/* Use Link to navigate to the ServiceDetails page with the event ID */}
                <Link to={`/servicedetails/${event.id}`} className="btn bg-pink-600 text-white text-[16px] font-semibold">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
