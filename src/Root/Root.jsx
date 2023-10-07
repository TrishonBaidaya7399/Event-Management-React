// import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Navbar from '../assets/Components/Navbar/Navbar';
import Home from '../Pages/Home/Home';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet>
                <Home/>
            </Outlet>
        </div>
    );
};

Root.propTypes = {
    
};

export default Root;