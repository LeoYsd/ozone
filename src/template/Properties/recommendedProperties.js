import { MapPinIcon } from "../../assets/svgs";
import CustomButton from "../../component/common/button";
import { Locations } from "../../utils/constants/locations";

function RecommendedProperties() {
    return (
        <div className="w-full">
            <p className="font-robotoMd text-dark text-gl">
                Recommended Properties
            </p>
            <p className="text-[#1E1A2FCC] font-robotoLight my-4">
                Location
            </p>

            <div className="w-full flex items-center justify-center gap-3 sm:flex-col md:flex-row">
                {Locations.slice(0, 3).map((location) => (
                    <div className='rounded-lg md:w-1/3 sm:w-full relative overflow-hidden' key={location.state}>
                            <img src={location.image} alt={location.state} className="h-full w-full object-cover rounded-lg hover:scale-105 duration-300" />
                            <div className="text-white absolute top-0 mt-3 ml-5">
                                <p className="font-robotoMd lg:text-[1.3rem]">{location.state}</p>
                                <p className="text-sm font-robotoLight">{location.listing_no} listings</p>
                            </div>
                            <div className="ml-5 mb-3 absolute bottom-0">{MapPinIcon}</div>
                    </div>
                ))}
            </div>
            <div className="w-full mt-3 rounded-lg flex items-center sm:flex-col md:flex-row justify-center overflow-hidden gap-3">
                <div className="md:w-2/3 sm:w-full relative">
                    <img src='https://res.cloudinary.com/dboqyj4bp/image/upload/v1683579660/arlington_ooglhz.svg' alt="Arlington" className="h-full w-full object-cover rounded-lg hover:scale-105 duration-300 z-10" />
                    <div className="text-white absolute top-0 flex flex-col items-start justify-between w-full h-full">
                        <div className="text-left mt-3 ml-5">
                            <p className="font-robotoMd lg:text-[1.3rem]">Arlington</p>
                            <p className="text-sm font-robotoLight">35 listings</p>
                        </div>
                        <div className="md:flex sm:hidden items-center w-full justify-center">
                            <CustomButton borderColor="border-white" color="white">View Details</CustomButton>
                        </div>
                        <div className="mb-3 ml-5">
                            {MapPinIcon}
                        </div>
                    </div>
                </div>
                <div className='rounded-lg md:w-1/3 sm:w-full h-full relative overflow-hidden'>
                        <img src="https://res.cloudinary.com/dboqyj4bp/image/upload/v1683579657/centerville_gzgzvf.svg" alt="" className="h-full w-full object-cover rounded-lg hover:scale-105 duration-300" />
                        <div className="text-white absolute top-0 mt-3 ml-5">
                            <p className="font-robotoMd lg:text-[1.3rem]">Centerville</p>
                            <p className="text-sm font-robotoLight">35 listings</p>
                        </div>
                        <div className="ml-5 mb-3 absolute bottom-0">{MapPinIcon}</div>
                </div>
            </div>
        </div>
    )
};

export default RecommendedProperties;