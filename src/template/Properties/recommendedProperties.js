import { MapPinIcon } from "../../assets/svgs";
import CustomButton from "../../component/common/button";
import { Locations } from "../../utils/constants/locations";

const RecommendedProperties = () => (
    <div className="w-full">
          <p className="font-robotoMd text-dark text-gl">Recommended Properties</p>
          <p className="text-[#1E1A2FCC] font-robotoLight my-4">Location</p>
          <div className="w-full flex justify-between flex-wrap">
            {Locations.slice(0, 3).map((location) => (
                    <div className='rounded-lg w-4/12 h-56 relative' key={location.state}>
                        <img src={location.image} alt={location.state} className="h-full w-full" />
                        <div className="py-6 px-9 text-white absolute top-0">
                            <p className="font-robotoMd">{location.state}</p>
                            <p className="text-sm font-robotoLight my-4">{location.listing_no} listings</p>
                        </div>
                            <div className="py-6 px-9 absolute bottom-0">{MapPinIcon}</div>
                    </div>
            ))}
          </div>
          <div className="w-full mt-5 flex items-center">
            <div className="w-full flex">
                <div className="px-5 w-8/12 relative h-full">
                    <img src='https://res.cloudinary.com/dboqyj4bp/image/upload/v1683579660/arlington_ooglhz.svg' alt="Arlington" className="h-full" />
                    <div className="py-6 px-9 text-white absolute top-0">
                            <p className="font-robotoMd">Arlington</p>
                            <p className="text-sm font-robotoLight my-4">35 listings</p>
                        </div>
                        <div className="absolute top-24 right-0 left-0">
                            <CustomButton borderColor="border-white" color="white">View Details</CustomButton>
                        </div>
                            <div className="py-6 px-9 absolute bottom-0">{MapPinIcon}</div>
                </div>
                <div className='rounded-lg w-4/12 h-56 relative'>
                        <img src="https://res.cloudinary.com/dboqyj4bp/image/upload/v1683579657/centerville_gzgzvf.svg" alt="" className="h-full w-full" />
                        <div className="py-6 px-9 text-white absolute top-0">
                            <p className="font-robotoMd">Centerville</p>
                            <p className="text-sm font-robotoLight my-4">35 listings</p>
                        </div>
                            <div className="py-6 px-9 absolute bottom-0">{MapPinIcon}</div>
                    </div>
            </div>
          </div>
    </div>
);

export default RecommendedProperties;