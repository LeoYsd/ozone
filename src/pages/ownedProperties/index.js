/* eslint-disable jsx-a11y/img-redundant-alt */
import { EthIcon, OptionIcon, ShareDarkIcon, VerifyIcon } from "../../assets/svgs";
import { AuthLayout } from "../../component/layout";
import OwnedPropertiesTab from "../../component/tabs/ownedPropertiesTab";
import ProfileHeader from "../../component/common/profileHeader/profileHeader";

const OwnedProperties = () => (
    <AuthLayout>
        <ProfileHeader />
        <div className="bg-dark py-6 w-full grid place-items-center">
            <div className="flex flex-col justify-center items-center w-[92%]">
                <div className="w-full flex md:flex-row sm:flex-col items-center justify-between mb-12">
                    <div className="w-full">
                        <div className="flex items-center">
                            <h1 className="text-white md:text-xl sm:text-[1.3rem]">Egon Emmanuel</h1>
                            <div className="ml-2 flex items-center">
                                {VerifyIcon}
                                <p className="text-sm text-white ml-px">Verified</p>
                            </div>
                        </div>
                        <div className="flex items-center sm:mt-2 md:mt-0">
                            <div>{EthIcon}</div>
                            <p className="md:text-[20px] sm:text-[1rem] text-white mx-2">0x4588...AA11</p>
                            <p className="text-[#F5F5F5] md:text-[20px] sm:text-[.8rem] opacity-40">Joined May 2023</p>
                        </div>
                    </div>
                    <div className="md:flex sm:hidden items-center">
                        <div className="cursor-pointer">{ShareDarkIcon}</div>
                        <div className="ml-6 cursor-pointer">{OptionIcon}</div>
                    </div>
                </div>
                <OwnedPropertiesTab />
            </div>
        </div>
    </AuthLayout>
);

export default OwnedProperties;