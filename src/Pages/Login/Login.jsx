// import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [logging, setLogging] = useState(false)
  const {signIn, signInWithGoogle} = useContext(AuthContext);
  const location = useLocation();
  const [error, setError] = useState(null);
  console.log("Location in the login page: ",location);
  const navigate = useNavigate();
    const handleLogin= e=>{
      setError(null);
      setLogging(true)
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
        .then(result=> {
          console.log('User Signed In', result.user);
          navigate (location?.state ? location.state : "/");
          setLogging(false);
          toast.success('Logged in successfully!', {
            position: 'top-right',
            autoClose: 3000, // Close the notification after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
        )
        .catch(error=> {
          console.error(error.message);
          const errorMessage = error.message.split('Firebase:').join('');
          setError(errorMessage);
          setLogging(false);
          toast.warn(`Failed to Log in! Try again`, {
            position: 'top-right',
            autoClose: 3000, // Close the notification after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        })
    }
    const handleSignInWithGoogle= (e)=>{
      e.preventDefault();
      setError(null);
      signInWithGoogle()
      .then(result=>{
      console.log("Log in with google successfully!", result.user);    
      navigate(location?.state ? location.state : "/")
      })
      .catch(error=>{
          console.error(error.message);
          setError(error.message);
      })
  }
    return (
        <div>
          <ToastContainer /> 
            <div className="hero min-h-[70vh] px-[20%] bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-pink-600">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email"  placeholder="email" className="input border-pink-600 border-2 text-pink-600" required />
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
        {
        (error && <p className="text-[16px] font-semibold text-red-500">{error}</p> )
        }
        <div className="form-control">
          <button type="submit" className="btn bg-pink-600 text-white font-bold hover:text-pink-600 hover:bg-[transparent] hover:border-2 hover:border-pink-600">{logging ? "Logging..." : "Login"}</button>
        </div>
        <p>Do not have an account? <span className="text-pink-600 font-bold"><NavLink to="/register"> Register</NavLink></span></p>
        <div className='border-0 flex gap-8 mt-6 mx-auto'>
                <button onClick={handleSignInWithGoogle} className='text-[16px] mb-2 rounded-lg justify-center py-2 px-[50px] flex gap-1 items-center border-[3px] border-t-red-500 border-l-yellow-400 border-b-green-500 border-r-blue-600'><FcGoogle className=""/>Google</button>
    </div>
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