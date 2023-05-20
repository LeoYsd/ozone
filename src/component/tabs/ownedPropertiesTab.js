import React, { useState } from 'react';
import SearchInput from '../common/inputs/SearchInput';
import { ListIcon, ListIconI } from "../../assets/svgs";
import Filter from '../common/filter';
import Status from '../common/status';
import PurchaseHistory from '../common/purchaseHistory';
import OwnedTabContent from './ownedTabContent/index';
import ListingsTabContent from './listingTab';
import FavouriteTabContent from './favoriteTab';
import ActivityTabContent from './activityTab';
import MoreTabContent from './moreTab/Index';

const tabs = ['Owned', 'Listings', 'Favorites', 'Wishlist', 'More'];

const OwnedPropertiesTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedIndex(index);
  };

  const renderTabContent = () => {
    switch (selectedIndex) {
      case 0:
        return <OwnedTabContent />;
      case 1:
        return <ListingsTabContent />;
      case 2:
        return <FavouriteTabContent />
      case 3:
        return <ActivityTabContent />;
      case 4:
        return <MoreTabContent />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <div className="flex md:justify-start md:items-start sm:justify-between sm:items-center md:gap-8">
        {tabs.map((tab, index) => (
          <div
            key={tab}
            className={`cursor-pointer md:text-[1rem] sm:text-[.8rem] transition duration-300 pb-2 ${
              index === selectedIndex ? 'bg-gray-100 text-white border-b-2 border-white' : 'text-[#FFFFFF66]'
            }`}
            onClick={() => handleTabSelect(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="border-[0.5px] border-[#FFFFFF66]" />
      <div className='my-6 flex items-center justify-between'>
        <Filter />
        <Status />
        <div className='w-[40%]'>
          <SearchInput placeholder="Search by name" style={{ background: 'transparent' }} />
        </div>
        <PurchaseHistory />
        <div className='bg-transparent flex items-center justify-center border border-[#FFFFFF66] py-2 w-[5rem] rounded-lg'>
          <div>{ListIcon}</div>
          <div className="ml-2">{ListIconI}</div>
        </div>
      </div>
      <div className="my-20 bg-[#1E1A2F]" style={{ flex: '1' }}>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default OwnedPropertiesTab;
