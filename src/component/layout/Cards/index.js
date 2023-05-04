import { AddIcon, BathubIcon, LikeIcon, ShareIcon, SquareFitIcon, carIcon } from "../../../assets/svgs";

const ListCard = ({ ...props }) => (
    <div className="bg-white rounded-xl w-[400px] shadow-card cursor-pointer hover:shadow-hover trans my-4">
        <img src={props.houseImage} alt="house" className="rounded-t-xl" />
        <div className="py-5 px-6">
            <p className="font-robotoMd text-dark text-md">{props.title}</p>
            <p className="text-subText text-normal my-2">{props.address}</p>
            <p className="text-lailac font-robotoMd text-md">{props.price}</p>

            <div className="flex text-sm text-[#6D737A] w-6/12 justify-between items-center my-4">
                <div className="flex">
                    {carIcon}
                    <p className="ml-2">{props.parkSpace}</p>
                </div>
                <div className="flex">
                    {BathubIcon}
                    <p className="ml-2">{props.bathub}</p>
                </div>
                <div className="flex">
                    {SquareFitIcon}
                    <p className="ml-2">{props.meter}</p>
                </div>
            </div>
            <div className="w-full h-px bg-[#1E1A2F33] mb-4" />
            <div className="items-center flex justify-between">
                <div className="flex items-center">
                        <img src={props.ownerImage} className="w-12 h-12 rounded-full bg-grey object-cover" alt="owner" />
                    <p className="text-[#1E1A2FCC] font-robotoLight ml-3 text-normal">{props.ownerName}</p>
                </div>
                <div className="flex w-5/12 justify-between">
                    <div className="bg-grey p-2 rounded-lg cursor-pointer trans hover:bg-hack">{ShareIcon}</div>
                    <div className="bg-grey p-2 rounded-lg cursor-pointer trans hover:bg-hack">{LikeIcon}</div>
                    <div className="bg-grey p-2 rounded-lg cursor-pointer trans hover:bg-hack">{AddIcon}</div>
                </div>
            </div>
        </div>
    </div>
);

export default ListCard;