import { useState } from "react";
import { toast } from "react-hot-toast";
import { AddIcon, BathubIcon, ShareIcon, SquareFitIcon, carIcon } from "../../../assets/svgs";
import Heart from '../../../assets/svgs/Heart.svg'

const ListCard = ({ ...props }) => {
    const [isLiked, setIsLiked] = useState(false);
    const handleCopyLink = () => {
        toast.success('Link copied');
    };

    const handleFavClick = () => {
        setIsLiked(!isLiked);
        toast.success('Added to favorites');
    };

    const handleWatchlistClick = () => {
        toast.success('Added to watchlist');
    };

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
                    <div className="flex w-5/12 justify-between">
                        <div onClick={handleCopyLink} className="bg-grey md:p-2 sm:p-1 grid place-items-center rounded-lg cursor-pointer trans hover:bg-hack">{ShareIcon}</div>
                        <div
                            onClick={handleFavClick}
                            className={`bg-grey md:p-2 sm:p-1 grid place-items-center rounded-lg cursor-pointer trans hover:bg-hack ${
                                isLiked ? 'fill-[#9C94FE]' : ''
                            }`}
                        >
                            <div className={isLiked ? 'fill-[#9C94FE]' : ''}>
                                <img src={Heart} alt="Like Icon" />
                            </div>
                        </div>
                        <div onClick={handleWatchlistClick} className="bg-grey md:p-2 sm:p-1 grid place-items-center rounded-lg cursor-pointer trans hover:bg-hack">{AddIcon}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ListCard;