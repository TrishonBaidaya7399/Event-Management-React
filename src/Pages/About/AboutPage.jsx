// import PropTypes from 'prop-types';
const AboutPage = () => {
    return (
    <div>
    <div className="hero min-h-[100vh]" style={{backgroundImage: 'url(https://i.ibb.co/m6XZj1C/event14.jpg)'}}>
    <div className="hero-overlay bg-opacity-70"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-full">
        <h1 className="mb-6 text-5xl font-bold text-pink-500">We are Tevents<br/><span className="text-white text-6xl">We bring dream Celebrations</span><br/>to life!</h1>
        <p className="mb-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br/> excepturi exercitationem quasi.<br/> In deleniti eaque aut repudiandae et a id nisi.</p>
        {/* <button className="btn btn-primary">Get Started</button> */}
      </div>
    </div>
    </div> 
    <div className=" py-12 bg-gray-200">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-8">
                  <img src="https://i.ibb.co/m6XZj1C/event14.jpg" className="lg:max-w-lg rounded-lg shadow-2xl" />
                    <div>
                      <h1 className="text-3xl md:text-5xl font-bold text-pink-600" >We will give a special celebration for you</h1>
                      <p className="py-6">At <span className="text-pink-600 text-xl font-bold">Tevents</span>, we are dedicated to making your special occasions truly unforgettable. With a passion for celebration and attention to detail, we provide a wide range of services designed to elevate your events. Whether it is a wedding, corporate gathering, or any special moment, we are here to create moments that last a lifetime. Experience the difference with Tevents.</p>
                    </div>
                 </div>
            </div>
        </div>
    <div>
    <div className=" py-12 bg-pink-200">
            <div className="hero">
                <div className="hero-content flex-col-reverse lg:flex-row gap-8 ">
                    <div>
                      <h1 className="text-3xl md:text-5xl font-bold text-pink-600" >What We Offer?</h1>
                      <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  <img src="https://i.ibb.co/84qr9Tp/carousel-img-01.jpg" className="lg:max-w-lg rounded-lg shadow-2xl" />
                 </div>
            </div>
        </div>
    <div className=" py-12 bg-gray-200">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-8">
                  <img src="https://i.ibb.co/c6dG65q/56-Brigade-Group22-1.jpg" className="lg:max-w-lg rounded-lg shadow-2xl" />
                    <div>
                      <h1 className="text-3xl md:text-5xl font-bold text-pink-600" >Who We Are?</h1>
                      <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                 </div>
            </div>
        </div>

    </div>       
    </div>
    );
};

AboutPage.propTypes = {
    
};

export default AboutPage;