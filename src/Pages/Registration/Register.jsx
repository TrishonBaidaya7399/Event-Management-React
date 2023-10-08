// import PropTypes from 'prop-types';

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
const {createUser} = useContext(AuthContext)

    const handleRegister= e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const image = form.get('image');
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password, image, name);
        //create user
        createUser(email, password)
        .then(result=>console.log(result.user))
        .catch(error=>console.error(error.message))
    }
    return (
        <div>
        <div className="hero min-h-screen px-[20%] bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold text-pink-600">Register now!</h1>
  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleRegister} className="card-body">
  <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name="name" placeholder="Name" className="input border-pink-600 border-2 text-pink-600" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Profile Image URL</span>
      </label>
      <input type="text" name="image" placeholder="URL" className="input border-pink-600 border-2 text-pink-600" required />
    </div>
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
    </div>
    <div className="form-control mt-6">
      <button type="submit" className="btn bg-pink-600 text-white font-bold hover:text-pink-600 hover:bg-[transparent] hover:border-2 hover:border-pink-600">Register</button>
    </div>
    <p>Already have an account? <span className="text-pink-600 font-bold"><NavLink to="/login"> Login</NavLink></span></p>
  </form>
</div>
</div>
</div>
    </div>
    );
};

Register.propTypes = {
    
};

export default Register;