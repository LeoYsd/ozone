import { BathubIcon, SquareFitIcon, carIcon } from "../../../assets/svgs";
import CustomButton from "../../common/button";
import {PURCHASE_PROPERTY} from '../../../utils/constants/pages';
import { Link } from "react-router-dom";

const ActivityCard = ({ ...props }) => {

    return (
        <div className="bg-white rounded-xl xl:w-[32.5%] sm:w-full md:w-[49%] shadow-card cursor-pointer hover:shadow-hover my-2">
            <img src={props.houseImage} alt="house" className="rounded-t-xl w-full" />
            <div className="py-5 px-6">
                <p className="font-robotoMd text-dark text-md">{props.title}</p>
                <p className="text-subText text-normal my-2">{props.address}</p>
                <p className="text-lailac font-robotoMd text-md">{props.price}</p>

                <div className="flex text-sm text-[#84a7cf] w-full items-start gap-4 my-4">
                    <div className="flex items-center justify-center">
                        {carIcon}
                        <p className="ml-2">{props.parkSpace}</p>
                    </div>
                    <div className="flex items-center justify-center">
                        {BathubIcon}
                        <p className="ml-2">{props.bathub}</p>
                    </div>
                    <div className="flex items-center justify-center">
                        {SquareFitIcon}
                        <p className="ml-2">{props.meter}</p>
                    </div>
                </div>
                <div className="w-full h-px bg-[#1E1A2F33] mb-4" />
                <div className="items-center flex justify-between g">
                    <div className="flex items-center">
                            <img src={props.ownerImage} className="w-12 h-12 rounded-full bg-grey object-cover" alt="owner" />
                        <p className="text-[#1E1A2FCC] font-robotoLight ml-3 text-normal">{props.ownerName}</p>
                    </div>
                    <div className="flex">
                    <Link to={PURCHASE_PROPERTY}>
                        <CustomButton
                            color="white"
                            border="none"
                            fontSize="1rem"
                            style={{ background: 'linear-gradient(94.71deg, #9C94FE -19.32%, #EF8DF8 126.64%)' }}
                        >
                            See More Details
                        </CustomButton>
                    </Link>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default ActivityCard;