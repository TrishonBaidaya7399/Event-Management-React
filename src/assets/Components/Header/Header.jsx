// import PropTypes from 'prop-types';

const Header = () => {
  return (
    <div className="hero min-h-[90vh]" style={{backgroundImage: 'url(https://i.ibb.co/84qr9Tp/carousel-img-01.jpg)'}}>
    <div className="hero-overlay bg-opacity-70"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-xl">
        <h1 className="mb-6 text-5xl font-bold text-pink-400">Your Wedding, Your Way</h1>
        <p className="mb-8 text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        
      </div>
    </div>
  </div>
  );
};

Header.propTypes = {
  
};

export default Header;