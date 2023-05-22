import { AuthLayout } from "../../component/layout";
import ProfileNav from "../../component/common/profileHeader/profileNav";
import { BathIcon, BedroomIcon, SmallShareIcon } from "../../assets/svgs";
import CustomButton from "../../component/common/button";
import { Features } from "../../utils/constants/features";
import { Link } from "react-router-dom";
import { MAKE_PAYMENT } from "../../utils/constants/pages";
import PropertyImages from "./propertyImages";

const PurchaseProperty = () => (
        <AuthLayout>
            <ProfileNav />
            <div className="mt-[45px] my-4">
                <PropertyImages />
            </div>
            <div className="px-16 mt-[75px] my-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-white text-gl">100.000 $</h1>
                    <div>{SmallShareIcon}</div>
                </div>
                <div className="flex items-center my-2 w-[25%] justify-between">
                    <p className="text-[#FFFBFBA6]">535 sq ft</p>
                    <div className="flex items-center">
                        <div>{BedroomIcon}</div>
                        <p className="text-[#FFFBFBA6] ml-2">1 Bedrooms</p>
                    </div>
                    <div className="flex items-center">
                        <div>{BathIcon}</div>
                        <p className="text-[#FFFBFBA6] ml-2">1 Bath</p>
                    </div>
                </div>
            <div className="w-[12%] my-[20px]">
                <Link to={MAKE_PAYMENT}>
                    <CustomButton style={{ background: "linear-gradient(94.72deg, rgba(239, 141, 248, 0.8) -31.25%, rgba(156, 148, 254, 0.8) 139.69%, rgba(239, 141, 248, 0) 139.69%)", height: "45px" }} color="white">Make Payment</CustomButton>
                </Link>
            </div>

            <div className="mt-[80px]">
                <h2 className="text-purple text-gl">Features</h2>

                <div className="block lg:flex items-center mt-[25px] w-full justify-between my-4 lg:my-0">
                    {Features.map((feat) => (
                        <div className="border-4 rounded-lg w-[170px] h-[134px] border-borderColor flex items-center justify-center" key={feat.text}>
                            <div>
                                {feat.icon}
                                <p className="mt-2 text-white">{feat.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-[80px]">
                <h2 className="text-purple text-gl">Go for Inspection</h2>
                <p className="text-borderColor">Deam home villas San Diego, CA, USA</p>
                
                <div className="mt-4 w-full flex justify-center mb-4">
                    <img src="https://res.cloudinary.com/dboqyj4bp/image/upload/v1684448935/screenshot_jpsk4q.svg" alt="location" className="mb-8" />
                </div>
            </div>
        </div>
        </AuthLayout>
    )

export default PurchaseProperty;