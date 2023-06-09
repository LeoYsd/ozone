import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import CartIcon from "../../assets/svgs/cart.svg";
import BrandLogo from "../../assets/icons/brand-logo.svg";
import ConnectWallet from "../common/connectWallet";
import SearchInput from "../common/inputs/SearchInput";
import { LANDING_PAGE_URL } from '../../utils/constants/pages';

const AuthNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full flex justify-center mt-0'>
      <div className="flex items-center justify-between w-[90%]">
        <div className="flex sm:w-full md:w-[5%] justify-between items-center md:mt-0">
          <Link to={LANDING_PAGE_URL}>
            <img src={BrandLogo} alt="logo" className="w-10" />
          </Link>
          <div className="md:hidden cursor-pointer" onClick={handleMenuClick}>
            {isMenuOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
          </div>
        </div>
        <div className={`md:flex md:items-center ${isMenuOpen ? 'flex' : 'hidden'} lg:w-[87%] md:w-[90%] md:gap-4`}>
          <div className='flex md:flex-row items-center md:justify-center lg:gap-10 md:gap-4'>
            <p className="cursor-pointer text-white my-auto">
              Market
            </p>
            <p className="cursor-pointer text-white">
              Discover
            </p>
          </div>
          <div className="hidden md:block w-[80%] lg:ml-5">
            <SearchInput />
          </div>
          <div className="hidden md:block">
            <ConnectWallet />
          </div>
          <div className="bg-hack p-3 rounded-lg">
            <img src={CartIcon} alt="CartIcon" />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed bg-[#1e1a2f] w-full h-screen flex flex-col items-center -mt-4 z-50">
          <div className="flex item-center justify-between mt-4 w-[90%]">
            <Link to={LANDING_PAGE_URL}>
              <img src={BrandLogo} alt="logo" className="w-10" />
            </Link>
            <div className="cursor-pointer grid place-items-center" onClick={handleMenuClick}>
              <FaTimes className="text-white text-2xl" />
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 mt-10 w-[90%] h-full text-white">
            <p className="cursor-pointer">Market</p>
            <p className="cursor-pointer">Discover</p>
            <SearchInput />
            <ConnectWallet />
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthNav;
