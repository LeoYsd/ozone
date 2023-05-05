import { useState } from 'react';
import arrowRight from '../../../assets/svgs/ArrowRight.svg';
import arrowLeft from '../../../assets/svgs/ArrowLeft.svg';


const CardSlider = ({ cards }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardWidth = 270;

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + cards.length) % cards.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % cards.length);
  };

  return (
    <div className="flex flex-col w-full mx-auto">
      <div className="flex items-center overflow-x-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * cardWidth}px)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="flex-none">
              {card}
            </div>
          ))}
        </div>
      </div>
      <div className="inset-x-0 bottom-0 flex gap-2 mt-10 justify-center">
        <button
          onClick={handlePrevSlide}
          className="bg-[#9C94FE] text-white font-bold py-2 px-4 rounded-l"
        >
          <img src={arrowLeft} alt="arrowLeft" />
        </button>
        <button
          onClick={handleNextSlide}
          className="bg-[#9C94FE] text-white font-bold py-2 px-4 rounded-r"
        >
          <img src={arrowRight} alt="arrowRight" />
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
