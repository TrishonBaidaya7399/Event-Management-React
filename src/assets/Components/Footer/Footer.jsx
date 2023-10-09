import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import footerLogo from "../../Images/Tevents-logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  const emailAddress = "shukantobaidya2018@gmail.com";

  return (
    <footer className="footer p-10 bg-pink-300 text-base-content">
      <aside>
        <div className='flex gap-2 items-center'>
          <img className='w-[100px]' src={footerLogo} alt="" />
          <div>
            <p className='text-4xl text-pink-700 font-bold mb-2'>Tevents</p>
            <p className='text-[16px] text-pink-600'>Providing reliable Event Management <br />services since 1992</p>
          </div>
        </div>
        <div className='flex gap-2 mx-auto mt-4'>
          <Link to="https://www.facebook.com/Trishon.Baidaya.Shontu?paipv=0&eav=AfZvF2IxZTaH0BCQW4-DYxvWb_4NOHDRawlagLrLbGAqmucO56MIK1UvnGXHJxVOVpM&_rdr">
            <FaFacebookF className='text-4xl p-1 font-bold text-pink-600 bg-white rounded-full border-2 border-pink-600 hover:text-white hover:bg-pink-600 duration-200'/>
          </Link>
          <Link to="https://www.instagram.com/trishonbaidaya/">
            <FaInstagram className='text-4xl p-1 font-bold text-pink-600 bg-white rounded-full border-2 border-pink-600 hover:text-white hover:bg-pink-600 duration-200'/>
          </Link>
          <Link to="https://www.youtube.com/channel/UCuwiAzRSiUZMaWLpEeA_RBQ">
            <FaYoutube className='text-4xl p-1 font-bold text-pink-600 bg-white rounded-full border-2 border-pink-600 hover:text-white hover:bg-pink-600 duration-200'/>
          </Link>
          <a href={`mailto:${emailAddress}`}>
            <BiLogoGmail className='text-4xl p-1 font-bold text-pink-600 bg-white rounded-full border-2 border-pink-600 hover:text-white hover:bg-pink-600 duration-200'/>
          </a>
        </div>
      </aside>
      <nav>
        <header className="text-2xl text-pink-600 font-bold">Services</header>
        <a className="text-[16px] text-gray-600 hover:text-pink-600">Branding</a>
        <a className="text-[16px] text-gray-600 hover:text-pink-600">Design</a>
        <a className="text-[16px] text-gray-600 hover:text-pink-600">Marketing</a>
        <a className="text-[16px] text-gray-600 hover:text-pink-600">Advertisement</a>
      </nav>
      <nav>
        <header className="text-2xl text-pink-600 font-bold">Company</header>
        <a className="text-[16px] text-gray-600 hover:text-pink-600">About us</a>
        <a className="text-[16px] text-gray-600 hover:text-pink-600">Contact</a>
        <a className="text-[16px] text-gray-600 hover:text-pink-600">Jobs</a>
        <a className="text-[16px] text-gray-600 hover:text-pink-600">Press kit</a>
      </nav>
      <nav>
        <header className="text-2xl text-pink-600 font-bold">Legal</header>
        <a className="text-[16px] text-gray-600 hover:text-pink-600">Terms of use</a>
        <a className="text-[16px] text-gray-600 hover:text-pink-600">Privacy policy</a>
        <a className="text-[16px] text-gray-600 hover:text-pink-600">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
