import ListCard from "../../component/layout/Cards";
import { Listings } from "../../utils/constants/listings";

export const TopList = () => (
    <div>
        <p className="my-5 text-subText font-robotoLight">Featured</p>
        <div className="flex flex-wrap justify-between">
            {Listings.map((list) => (
                <ListCard key={list.id} houseImage={list.image} title={list.title} address={list.address} parkSpace={list.parkSpace} price={list.price} ownerImage={list.owner_img} ownerName={list.owner_name} bathub={list.bathub} meter={list.meter} />
            ))}
        </div>
    </div>
);

export const WatchList = () => (
    <div>
        <p className="my-5 text-subText font-robotoLight">My Watch</p>
        <div className="flex flex-wrap w-full justify-between">
            {Listings.map((list) => (
                <ListCard key={list.id} houseImage={list.image} title={list.title} address={list.address} parkSpace={list.parkSpace} price={list.price} ownerImage={list.owner_img} ownerName={list.owner_name} bathub={list.bathub} meter={list.meter} />
            ))}
        </div>
    </div>
);
