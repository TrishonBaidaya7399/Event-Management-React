// import PropTypes from 'prop-types';
import img from "../../Images/Anniversaries-Party-planner.jpg" 
import img2 from "../../Images/Baby-shower-Party-planner.jpg" 
import img3 from "../../Images/Birthday-Party-planner.jpg" 
import img4 from "../../Images/Birthday-Party-planner.jpg" 
import img5 from "../../Images/carousel img 01.jpeg" 
import img6 from "../../Images/Engagement-party-planner.jpeg" 
const Services = () => {
  
    return (
        <div className="flex flex-col md:my-12 mx-[100px]">
            <h1 className="text-4xl font-bold text-pink-600 text-center">Service</h1>
            <p className="text-center text-xl font-semibold md:mb-12 mt-6">We provide our best services to make your function more delightful</p>
            <div className="card-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* card 1 */}
              <div className="card  bg-pink-200 shadow-xl">
                <figure className="">
                    <img src={img} alt="Shoes" className="rounded-t-lg w-full h-[250px]" />
                </figure>
                <div className="card-body  text-left">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <button className="btn bg-pink-600 text-white text-[16px] font-semibold">Details</button>
                </div>
                </div>
              </div>
                {/* card 2 */}
              <div className="card  bg-pink-200 shadow-xl">
                <figure className="">
                    <img src={img2} alt="Shoes" className="rounded-t-lg w-full h-[250px]" />
                </figure>
                <div className="card-body  text-left">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <button className="btn bg-pink-600 text-white text-[16px] font-semibold">Details</button>
                </div>
                </div>
              </div>
                {/* card 3 */}
              <div className="card  bg-pink-200 shadow-xl">
                <figure className="">
                    <img src={img3} alt="Shoes" className="rounded-t-lg w-full h-[250px]" />
                </figure>
                <div className="card-body  text-left">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <button className="btn bg-pink-600 text-white text-[16px] font-semibold">Details</button>
                </div>
                </div>
              </div>
                {/* card 4 */}
              <div className="card  bg-pink-200 shadow-xl">
                <figure className="">
                    <img src={img4} alt="Shoes" className="rounded-t-lg w-full h-[250px]" />
                </figure>
                <div className="card-body  text-left">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <button className="btn bg-pink-600 text-white text-[16px] font-semibold">Details</button>
                </div>
                </div>
              </div>
                {/* card 5 */}
              <div className="card  bg-pink-200 shadow-xl">
                <figure className="">
                    <img src={img5} alt="Shoes" className="rounded-t-lg w-full h-[250px]" />
                </figure>
                <div className="card-body  text-left">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <button className="btn bg-pink-600 text-white text-[16px] font-semibold">Details</button>
                </div>
                </div>
              </div>
                {/* card 6 */}
              <div className="card  bg-pink-200 shadow-xl">
                <figure className="">
                    <img src={img6} alt="Shoes" className="rounded-t-lg w-full h-[250px]" />
                </figure>
                <div className="card-body  text-left">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <button className="btn bg-pink-600 text-white text-[16px] font-semibold">Details</button>
                </div>
                </div>
              </div>
            </div>
        </div>
      
    );
};

Services.propTypes = {
    
};

export default Services;
