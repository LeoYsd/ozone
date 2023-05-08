import React, { useState } from "react";
import LandingPageLayout from "../component/layout";
import { TopList, WatchList } from "../template/Listings";
import RecommendedProperties from "../template/Properties/recommendedProperties";

const LandingPage = () => {
    const [topListing, setTopListing] = useState(true);
return (
    <LandingPageLayout>
        <div className="my-9">
            <div className="flex w-1/12 justify-between cursor-pointer">
                <p className={`font-bold trans border-b-2 ${topListing ? 'border-purple text-dark' : 'text-subText border-white'} py-2`} onClick={() => setTopListing(true)}>Top</p>
                <p className={`font-bold trans border-b-2 ${!topListing ? 'border-purple text-dark' : 'text-subText border-white'} py-2`} onClick={() => setTopListing(false)}>WatchList</p>
            </div>
            <div className="w-full h-px bg-hack"></div>

            {topListing ? (<TopList />) : (<WatchList />)}
        </div>

        <div className="w-full my-36">
            <RecommendedProperties />
        </div>

    </LandingPageLayout>
);
};

export default LandingPage;