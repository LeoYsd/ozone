import PropTypes from 'prop-types';
import HotOffers from "../hotOffers/hotOffers";
import LocationIcon from "../../../assets/svgs/locationTag.svg";
import arrowOut from '../../../assets/svgs/ArrowsOut.svg';


const Card = ({ imageSrc, hotOffer, Location, price }) => {
    return (
      <div className="
        w-[270px]
        h-[370px]
        rounded
        cursor-pointer
        relative
        bg-gradient-to-b from-[rgba(59, 77, 129, 0.16)]
        via-transparent to-[rgba(59, 77, 129, 0.8)] mr-6
      ">
        <div className="
            absolute
            inset-0
            rounded
            overflow-hidden
        ">
          <img className="
          w-full
          h-full
          object-cover
          rounded
          transition-transform
          hover:scale-105
          duration-300"
          src={imageSrc} alt={Location + 'image'} />
        </div>
        {hotOffer && (
          <HotOffers  />
        )}
        <div className="
            absolute
            bottom-0
            left-0
            p-4
            flex
            items-center
            justify-between
            w-full
            text-white
            ">
          <div className="
            flex
            gap-2
            items-center
            justify-center
          ">
            <img src={LocationIcon} alt="Location-Icon" />
            <p>{Location}</p>            
          </div>
          <div className="
            flex
            gap-2
            items-center
            justify-center
          ">
            <img src={arrowOut} alt="Location-Icon" />
            <p>{price}</p>            
          </div>
        </div>
      </div>
    );
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  hotOffer: PropTypes.bool,
  Location: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default Card;
