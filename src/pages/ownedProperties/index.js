/* eslint-disable jsx-a11y/img-redundant-alt */
import { SearchInput } from "evergreen-ui";
import { ChevronDown, EthIcon, FilterIcon, ListIcon, ListIconI, OptionIcon, ShareDarkIcon, VerifyIcon } from "../../assets/svgs";
import { AuthLayout } from "../../component/layout";
import OwnedPropertiesTab from "../../component/tabs/ownedPropertiesTab";
import CustomButton from "../../component/common/button";
import { LANDING_PAGE_URL } from "../../utils/constants/pages";
import OwnedPropertiesTable from "../../component/table/ownedPropertiesTable";
import { properties } from "../../utils/constants/listings";

const OwnedProperties = () => (
    <AuthLayout>
            <div className="h-[400px] w-full">
                <img src="https://res.cloudinary.com/dboqyj4bp/image/upload/v1683579660/arlington_ooglhz.svg" alt="image" className="" />
                <div className="w-[157px] h-[157px] bg-[#1056BECC] rounded-full border-[12px] -mt-40 absolute mx-[59px]"></div>
            </div>
            <div className="bg-dark -mt-3 h-fit px-[59px] py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="flex items-center">
                            <h1 className="text-white text-xl">Egon Emmanuel</h1>
                            <div className="ml-2 flex items-center">
                                {VerifyIcon}
                                <p className="text-sm text-white ml-px">Verify</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div>{EthIcon}</div>
                            <p className="text-[20px] text-white mx-2">0x4588...AA11</p>
                            <p className="text-[#F5F5F5] opacity-40">Joined May 2023</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="cursor-pointer">{ShareDarkIcon}</div>
                        <div className="ml-14 cursor-pointer">{OptionIcon}</div>
                    </div>
                </div>
            </div>

            <div className="bg-dark py-[61px] px-9">
                <OwnedPropertiesTab />

                <div className="-mt-8 pb-10 flex items-center justify-between">
                    <div className="flex items-center border rounded-lg border-[#F5F5F5] text-white w-fit py-2 px-8 cursor-pointer">
                        <div className="mr-3">{FilterIcon}</div>
                        <p>Filter</p>
                    </div>
                    <div className="flex items-center border rounded-lg border-[#F5F5F5] text-white w-fit py-2 px-8 cursor-pointer">
                        <p>Status</p>
                        <div>{ChevronDown}</div>
                    </div>
                    <SearchInput placeholder="Search by name" style={{ background: '#1E1A2F' }} />
                    <div className="flex items-center border rounded-lg border-[#F5F5F5] text-white w-fit py-2 px-8 cursor-pointer">
                        <p className="mr-3">Recently acquired</p>
                        <div>{ChevronDown}</div>
                    </div>
                    <div className="flex items-center border rounded-lg border-[#F5F5F5] text-white w-fit py-2 px-8 cursor-pointer">
                        <div>{ListIcon}</div>
                        <div className="ml-2">{ListIconI}</div>
                    </div>
                </div>

                {properties.length ? (<OwnedPropertiesTable />) :
                (
                    <div className="border border-[#F5F5F5] h-[300px] mt-5 rounded-lg flex items-center justify-center">
                        <div>
                            <p className="text-lg text-center text-white mb-8">No Property found for this search</p>
                            <CustomButton color="white" style={{ background: ' linear-gradient(94.71deg, #9C94FE -19.32%, #EF8DF8 126.64%)' }} href={LANDING_PAGE_URL}>Back to all Properties</CustomButton>
                        </div>
                    </div>
                )}

            </div>
    </AuthLayout>
);

export default OwnedProperties;