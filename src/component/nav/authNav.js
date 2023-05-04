import BrandLogo from "../../assets/icons/brand-logo.svg";
import { CartIcon } from "../../assets/svgs";
import ConnectWallet from "../common/connectWallet";
import SearchInput from "../common/inputs/SearchInput";

const AuthNav = () => (
   <div className="flex px-20 items-center w-full justify-between">
    <div className="w-1/12">
        <img src={BrandLogo} alt="logo" className="w-14" />
    </div>
    <div className="flex items-center w-2/12 justify-between text-white font-robotoMd">
        <p className="cursor-pointer trans hover:text-lailac">Market</p>
        <p className="cursor-pointer trans hover:text-lailac">Discover</p>
    </div>
    <div className="flex items-center justify-between w-8/12 ml-8">
        <SearchInput />
        <ConnectWallet />
        <div className="bg-hack p-2.5 rounded-lg ml-4">{CartIcon}</div>
    </div>
   </div>
);

export default AuthNav;