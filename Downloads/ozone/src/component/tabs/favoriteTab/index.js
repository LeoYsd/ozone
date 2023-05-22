import { Listings } from "../../../utils/constants/listings";
import ListCard from "../../layout/Cards";

const FavouriteTabContent = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between">
        {Listings.map((card) => (
          <ListCard
            key={card.id}
            id={card.id}
            houseImage={card.image}
            title={card.title}
            address={card.address}
            price={card.price}
            parkSpace={card.parkSpace}
            bathub={card.bathub}
            meter={card.meter}
            ownerImage={card.owner_img}
            ownerName={card.owner_name}
          />
        ))}
      </div>
    </div>
  );
};

export default FavouriteTabContent;
