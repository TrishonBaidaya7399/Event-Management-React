// import PropTypes from 'prop-types';

const Header = () => {
  return (
    <div className="hero min-h-[90vh]" style={{backgroundImage: 'url(https://i.ibb.co/84qr9Tp/carousel-img-01.jpg)'}}>
    <div className="hero-overlay bg-opacity-70"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-xl">
        <h1 className="mb-6 text-5xl font-bold text-pink-500">Your Wedding, Your Way</h1>
        <p className="mb-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        {/* <button className="btn btn-primary">Get Started</button> */}
        <div className="search w-[100%]">
          <input type="text" className="border-2 rounded-l-md text-pink-700 font-semibold pl-2 border-pink-600 bg-gray-200 h-[50px] w-[300px]"/>
          <button className="rounded-r-md bg-pink-600 h-[50px] px-6 font-bold text-[18px]">Search</button>
        </div>
      </div>
    </div>
  </div>
  );
};

Header.propTypes = {
  
};

export default Header;