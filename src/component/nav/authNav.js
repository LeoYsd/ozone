import { Link } from 'react-router-dom';
import BrandLogo from "../../assets/icons/brand-logo.svg";
import { CartIcon } from "../../assets/svgs";
import ConnectWallet from "../common/connectWallet";
import SearchInput from "../common/inputs/SearchInput";

const AuthNav = () => (
  <div className='w-full grid place-items-center'>
    <div className="flex items-center w-[90%] justify-between">
    <div className="">
      <Link to="/"> 
        <img src={BrandLogo} alt="logo" className="w-10" />
      </Link>
    </div>
    <div className="flex items-center w-[87%] justify-between text-white font-robotoMd">
      <div className='flex items-center justify-center gap-10'>
        <p className="cursor-pointer trans hover:text-lailac">Market</p>
        <p className="cursor-pointer trans hover:text-lailac">Discover</p>
      </div>
      <div>
        <SearchInput />
      </div>
      <div></div>
      <ConnectWallet />
      <div className="bg-hack p-2.5 rounded-lg ml-4">
        {CartIcon}
      </div>
    </div>
    </div>
  </div>
);

export default AuthNav;
