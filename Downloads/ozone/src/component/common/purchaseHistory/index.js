import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

const PurchaseHistory = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setIsDropdownOpen(false); 
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <div
        className="appearance-none bg-transparent flex items-center justify-center border border-[#FFFFFF66] py-2 w-[13rem] rounded-md focus:outline-none cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedOption ? (
            <div className='flex items-center justify-center leading-[28px] gap-2 w-full'>
                <span className='text-white capitalize'>{selectedOption}</span>
                <BsChevronDown color='white' />
            </div>
        ) : (<div className='flex items-center justify-center leading-[28px] gap-2 w-full'>
            <span className="text-white">Purchase History</span>
            <BsChevronDown color='white' />
            </div>
        )}
      </div>
      {isDropdownOpen && (
        <div className="absolute py-2 mt-2 w-full bg-white rounded-lg">
          <ul>
            <li
              className="px-4 py-2 cursor-pointer text-dark"
              onClick={() => handleOptionChange({ target: { value: 'Recently sold' } })}
            >
              Recently sold
            </li>
            <li
              className="px-4 py-2 cursor-pointer text-dark"
              onClick={() => handleOptionChange({ target: { value: 'Recently acquired' } })}
            >
              Recently acquired
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PurchaseHistory;
