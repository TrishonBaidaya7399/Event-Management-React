// import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="hero min-h-[70vh] px-[20%] bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-pink-600">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input border-pink-600 border-2 text-pink-600" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input border-pink-600 border-2 text-pink-600" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-pink-600 text-white font-bold hover:text-pink-600 hover:bg-[transparent] hover:border-2 hover:border-pink-600">Register</button>
        </div>
        <p>Do not have an account? <span className="text-pink-600 font-bold"><NavLink to="/register"> Register</NavLink></span></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

Login.propTypes = {
    
};

export default Login;