import React, { useState } from 'react';
import { BsFilter } from 'react-icons/bs';

const Filter = () => {
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
        className="appearance-none bg-transparent border border-[#FFFFFF66] py-2 w-[8rem] rounded-md focus:outline-none cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedOption ? (
            <div className='flex items-center justify-start ml-3 gap-2 leading-[28px]'>
                <BsFilter color='white' />
                <span className='text-white capitalize'>{selectedOption}</span>
            </div>
        ) : (<div className='flex items-center justify-start ml-3 gap-2 leading-[28px]'>
            <BsFilter color='white' />
            <span className="text-white">Filter</span>
            </div>
        )}
      </div>
      {isDropdownOpen && (
        <div className="absolute py-2 mt-2 w-full bg-white rounded-lg">
          <ul>
            <li
              className="px-4 py-2 cursor-pointer text-dark"
              onClick={() => handleOptionChange({ target: { value: 'Date' } })}
            >
              Date
            </li>
            <li
              className="px-4 py-2 cursor-pointer text-dark"
              onClick={() => handleOptionChange({ target: { value: 'Price' } })}
            >
              Price
            </li>
            <li
              className="px-4 py-2 cursor-pointer text-dark"
              onClick={() => handleOptionChange({ target: { value: 'Location' } })}
            >
              Location
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
