import { NavLink } from "react-router-dom";
import defaultProfile from "../../Images/user.png"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import TeventsLogo from "../../Images/Tevents-logo.png"
const Navbar = () => {
  const {user, logout} = useContext(AuthContext);
  const handleSignOut = () =>{
    logout()
    .then()
    .catch()
  }
  const links=
  <>
   <li>
        <NavLink className="text-[18px] text-gray-500 font-normal hover:bg-pink-600 hover:text-white active:text-white " to="/" activeClassName="active-link">Home</NavLink>
    </li>
    <li>
        <NavLink className="text-[18px] text-gray-500 font-normal hover:bg-pink-600 hover:text-white active:text-white" to="/about">About</NavLink>
    </li>
    <li>
        <NavLink className="text-[18px] text-gray-500 font-normal hover:bg-pink-600 hover:text-white active:text-white " to="/services" activeClassName="active-link">Services</NavLink>
    </li>
    <li>
        <NavLink className="text-[18px] text-gray-500 font-normal hover:bg-pink-600 hover:text-white active:text-white " to="/gallery" activeClassName="active-link">Gallery</NavLink>
    </li>
    <li>
        <NavLink className="text-[18px] text-gray-500 font-normal hover:bg-pink-600 hover:text-white active:text-white " to="/register" activeClassName="active-link">Register</NavLink>
    </li>
  </>
    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start flex-grow"> {/* Added flex-grow */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {links}
            </ul>
          </div>
          <img className="w-[50px] mr-[-18px]" src={TeventsLogo} alt="" />
          <a className="btn btn-ghost normal-case text-3xl text-pink-600 font-bold">Tevents</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end flex"> {/* Added flex */}
        <img className="w-[55px] mr-4 rounded-full border-2 border-pink-600" src={user?.photoURL ? user.photoURL : defaultProfile} alt="" />
        {
          user ?
          <button onClick={handleSignOut}><a className="btn bg-pink-600 text-white hover:bg-[transparent] hover:border-2 hover:border-pink-600 hover:text-pink-600 font-bold">Logout</a></button>
          :
          <NavLink to="/login"><a className="btn border-2 border-pink-600 bg-pink-600 text-white hover:bg-[transparent] hover:border-2 hover:border-pink-600 hover:text-pink-600 font-bold">Login</a></NavLink>
        }
        </div>
      </div>
    );
  };
  
  export default Navbar;
  