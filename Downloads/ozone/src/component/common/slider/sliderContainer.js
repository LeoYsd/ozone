import Card from "../slider/cards";
import CardSlider from "../slider/cardSlider";
import propertyOne from '../../../assets/images/propertyOne.png';
import propertyTwo from '../../../assets/images/propertyTwo.png';
import propertyThree from '../../../assets/images/propertyThree.png';
import propertyFour from '../../../assets/images/propertyFour.png';
// import propertyFive from '../../assets/images/propertyFive.png';

const SliderContainer = () => {
    return (
        <div className="
            my-16
            w-[90%]
            mx-auto
        ">
            <h1 className="
                font-bold
                text-lg
                leading-9
                text-opacity-80
                text-gray-800
                my-4
            ">
                Latest Properties
            </h1>
            <h2 className="
                font-normal
                text-base
                leading-6
                text-gray-600
            ">
                Popular
            </h2>
            <div className="
                my-6
            ">
                <CardSlider
                    cards={[
                        <Card
                        Location="Washington"
                        price={1000}
                        imageSrc={propertyOne}
                        hotOffer={true}
                        />,
                        <Card
                        Location="London"
                        price={4000}
                        imageSrc={propertyTwo}
                        />,
                        <Card
                        Location="Zanzibar"
                        price={6000}
                        imageSrc={propertyThree}
                        hotOffer={true}
                        />,
                        <Card
                        Location="Dubai"
                        price={2000}
                        imageSrc={propertyFour}
                        />,
                        <Card
                        Location="Washington"
                        price={9000}
                        imageSrc={propertyOne}
                        hotOffer={true}
                        />,
                        <Card
                        Location="London"
                        price={3000}
                        imageSrc={propertyTwo}
                        />,
                        <Card
                        Location="Zanzibar"
                        price={6000}
                        imageSrc={propertyThree}
                        hotOffer={true}
                        />,
                        <Card
                        Location="Dubai"
                        price={2000}
                        imageSrc={propertyFour}
                        />,
                        <Card
                        Location="London"
                        price={3000}
                        imageSrc={propertyTwo}
                        />,
                        <Card
                        Location="Zanzibar"
                        price={6000}
                        imageSrc={propertyThree}
                        hotOffer={true}
                        />,
                        <Card
                        Location="Dubai"
                        price={2000}
                        imageSrc={propertyFour}
                        />,
                    ]}
                />
            </div>
        </div>
    )
};

export default SliderContainer;