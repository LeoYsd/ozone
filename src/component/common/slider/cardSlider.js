import { useState } from 'react';
import arrowRight from '../../../assets/svgs/ArrowRight.svg';
import arrowLeft from '../../../assets/svgs/ArrowLeft.svg';

const CardSlider = ({ cards }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardWidth = 270;
  const disablePrev = currentSlide === 0;
  const disableNext = currentSlide === cards.length - 1;

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
          style={{
            transform: `translateX(-${currentSlide * cardWidth}px)`,
            width: `${cards.length * cardWidth}px`
          }}
        >
          {cards.map((card, index) => (
            <div key={index} className="flex-none">
              {card}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 mt-10 items-center justify-center">
        <button
          onClick={handlePrevSlide}
          className={`bg-[#9C94FE] p-2 rounded-l ${disablePrev ? 'opacity-50 cursor-default' : 'cursor-pointer'}`}
          disabled={disablePrev}
        >
          <img src={arrowLeft} alt="arrowLeft" />
        </button>
        <button
          onClick={handleNextSlide}
          className={`bg-[#9C94FE] p-2 rounded-r ${disableNext ? 'opacity-50 cursor-default' : 'cursor-pointer'}`}
          disabled={disableNext}
        >
          <img src={arrowRight} alt="arrowRight" />
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
