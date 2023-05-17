import { useState } from "react";
import ListCard from "../../component/layout/Cards";
import { Listings } from "../../utils/constants/listings";

export const TopList = ({ addToWatchlist }) => {
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteClick = (id) => {
    const updatedFavorites = [...favorites];
    const index = updatedFavorites.indexOf(id);

    if (index > -1) {
      updatedFavorites.splice(index, 1); // Remove from favorites
    } else {
      updatedFavorites.push(id); // Add to favorites
    }

    setFavorites(updatedFavorites);
  };

  return (
    <div>
      <p className="my-5 text-subText font-robotoLight">Featured</p>
      <div className="flex flex-wrap justify-between">
        {Listings.map((list) => (
          <ListCard
            key={list.id}
            houseImage={list.image}
            title={list.title}
            address={list.address}
            parkSpace={list.parkSpace}
            price={list.price}
            ownerImage={list.owner_img}
            ownerName={list.owner_name}
            bathub={list.bathub}
            meter={list.meter}
            isFavorite={favorites.includes(list.id)}
            onFavoriteClick={() => handleFavoriteClick(list.id)}
            addToWatchlist={addToWatchlist} // Pass addToWatchlist function to ListCard component
          />
        ))}
      </div>
    </div>
  );
};

export const WatchList = ({ addToWatchlist }) => {
    const [favorites, setFavorites] = useState([]);
  
    const handleFavoriteClick = (id) => {
      const updatedFavorites = [...favorites];
      const index = updatedFavorites.indexOf(id);
  
      if (index > -1) {
        updatedFavorites.splice(index, 1); // Remove from favorites
      } else {
        updatedFavorites.push(id); // Add to favorites
      }
  
      setFavorites(updatedFavorites);
    };
  
    const favoriteListings = Listings.filter((list) => favorites.includes(list.id));
  
    return (
      <div>
        <p className="my-5 text-subText font-robotoLight">My Watch</p>
        <div className="flex flex-wrap w-full justify-between">
          {favoriteListings.map((list) => (
            <ListCard
              key={list.id}
              houseImage={list.image}
              title={list.title}
              address={list.address}
              parkSpace={list.parkSpace}
              price={list.price}
              ownerImage={list.owner_img}
              ownerName={list.owner_name}
              bathub={list.bathub}
              meter={list.meter}
              isFavorite={favorites.includes(list.id)}
              onFavoriteClick={() => handleFavoriteClick(list.id)}
              addToWatchlist={addToWatchlist} // Pass addToWatchlist function to ListCard component
            />
          ))}
        </div>
      </div>
    );
};
