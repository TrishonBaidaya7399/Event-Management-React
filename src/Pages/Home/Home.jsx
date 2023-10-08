// import PropTypes from 'prop-types';

import About from "../../assets/Components/About/About";
import Gallery from "../../assets/Components/Gallery/Gallery";
import Header from "../../assets/Components/Header/Header";
import Services from "../../assets/Components/Services/Services";
import Review from "../../assets/Review/Review";


const Home = () => {
    return (
        <div>
        <Header/>
        <Services/> 
        <About/>  
        <Gallery/> 
        <Review/> 
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;