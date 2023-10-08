import PropTypes from 'prop-types';

import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location);
    if (loading){
        return <div className='flex items-center justify-center'><span className="loading loading-bars loading-lg text-pink-600 w-[100px] h-[100px] lg:my-[200px]"></span></div>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;