// import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Navbar from '../assets/Components/Navbar/Navbar';
import Footer from '../assets/Components/Footer/Footer';


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet>
            </Outlet>
            <Footer/>
        </div>
    );
};

Root.propTypes = {
    
};

export default Root;