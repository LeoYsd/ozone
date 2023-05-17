import React, { useState } from "react";
import LandingPageLayout from "../component/layout";
import { TopList, WatchList } from "../template/Listings";
import RecommendedProperties from "../template/Properties/recommendedProperties";

const LandingPage = () => {
  const [topListing, setTopListing] = useState(true);
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (listing) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, listing]);
  };

  return (
    <LandingPageLayout>
      <div className="my-9">
        <div className="flex w-full md:justify-start md:gap-4 sm:justify-between cursor-pointer">
          <p
            className={`font-bold trans border-b-2 ${
              topListing ? "border-purple text-dark" : "text-subText border-white"
            } py-2`}
            onClick={() => setTopListing(true)}
          >
            Top
          </p>
          <p
            className={`font-bold trans border-b-2 ${
              !topListing ? "border-purple text-dark" : "text-subText border-white"
            } py-2`}
            onClick={() => setTopListing(false)}
          >
            WatchList
          </p>
        </div>
        <div className="w-full h-px bg-hack"></div>

        {topListing ? <TopList addToWatchlist={addToWatchlist} /> : <WatchList addToWatchlist={addToWatchlist} />}
      </div>

      <div className="w-full my-36">
        <RecommendedProperties />
      </div>
    </LandingPageLayout>
  );
};

export default LandingPage;
