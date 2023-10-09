// import PropTypes from 'prop-types';
import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from 'firebase/auth';


const Register = () => {
const {createUser,signInWithGoogle,setUser, user} = useContext(AuthContext);
const [error, setError] = useState(null);
const [register, setRegister] = useState(false);
const navigate = useNavigate();

    const handleRegister = e=>{
        e.preventDefault();
        setError(null);
        setRegister(true);
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const image = form.get('image');
        const email = form.get('email');
        const password = form.get('password');
        const accepted = e.target.terms.checked;
        console.log(email, password, image, name);

       //password validation 
       if(password.length<6){
        setError("Password should be at least 6 characters")
        return;
    }
    else if(!/[a-z]/.test(password)){
        setError("Password should have at least one lowercase character");
        return;
    }
    else if(!/[A-Z]/.test(password)){
        setError("Password should have at least one uppercase character");
        return;
    }
    else if(!/[0-9]/.test(password)){
        setError("Password should have at least one number character");
        return;
    }
    else if(!/[!@#$%^&*()_+"'`~]/.test(password)){
        setError("Password should have at least one special character");
        return;
    }else if(!accepted){
        setError('Please accept our terms and condition')
        return;
    }
        //create user
        createUser(email, password)
        .then(result=>{
          console.log(result.user);
          //update profile
          updateProfile(result.user, {
            displayName: name,
            photoURL: image,
          })
            .then(()=> alert('Profile Updated'))
            .catch(error=>{
            console.log(error.message);
          })
          setRegister(false);
          setUser({...user, displayName: name, photoURL: image }) //.......................................................................
          toast.success('Registration successful!', {
            position: 'top-right',
            autoClose: 3000, // Close the notification after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        })
        .catch(error=>{
          console.error(error.message);
          const errorMessage = error.message.split('Firebase:').join('');
          setError(errorMessage);
          setRegister(false);
          toast.warn(`${error}`, {
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
<div className="hero min-h-screen px-auto lg:px-[20%] bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold text-pink-600 pb-6 lg:pb-0">Register now!</h1>
  <p className="py-6 hidden lg:block ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
    {
      (error && <p className="text-[16px] font-semibold text-red-500">{error}</p> )
    }
    <div className="flex items-center justify-center mt-2 mb-[-8px]">
      <input type="checkbox" name="terms" id="terms" className="mr-2" />
      <label htmlFor="terms">Accept our <a href="#">Terms & Condition</a></label>
    </div>
    <div className="form-control mt-6">
      <button type="submit" className="btn bg-pink-600 text-white font-bold hover:text-pink-600 hover:bg-[transparent] hover:border-2 hover:border-pink-600">{register ? "Registering..." : "Register"}</button>
    </div>
    <p>Already have an account? <span className="text-pink-600 font-bold"><NavLink to="/login"> Login</NavLink></span></p>
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

Register.propTypes = {
    
};

export default Register;