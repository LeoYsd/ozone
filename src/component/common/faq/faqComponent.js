import FaqItem from "./faq";
import arrowRightDark from '../../../assets/svgs/arrow-right.svg'

export default function FAQ() {
    return (
      <div className="flex flex-col items-center justify-center gap-6 w-full my-36">
        <div className="flex items-center justify-between w-[90%] text-[1.5rem] font-bold text-[#1E1A2FCC]
        ">
            <h1>FAQ</h1>
            <h1 className="flex items-center justify-center gap-2">
                All FAQs
                <img src={arrowRightDark} alt={arrowRightDark} />
            </h1>
        </div>
        <div className="w-[90%] flex items-center justify-center">
            <div className="w-full flex flex-wrap align-center justify-between">
            <FaqItem
                question="How do I search for a property in a specific location?"
                answer="To search for a property in a specific location, simply enter the location in the search bar and hit the search button. You can also filter your search by price, number of bedrooms, and other criteria."
                />
            <FaqItem
                question="Can I save properties to view later?"
                answer='Yes you can save properties by clicking the "Save" button on the property listing. You can then view your saved properties by clicking on the "Saved Properties" tab in the navigation menu.'
                />
            <FaqItem
                question="How do I schedule a viewing for a property?"
                answer='To schedule a viewing for a property, click the "Schedule Viewing" button on the property listing. You will then be prompted to choose a date and time for the viewing.'
                />
            <FaqItem
                question="How do I search for a property in a specific location?"
                answer="To search for a property in a specific location, simply enter the location in the search bar and hit the search button. You can also filter your search by price, number of bedrooms, and other criteria."
                />
            <FaqItem
                question="Can I save properties to view later?"
                answer='Yes you can save properties by clicking the "Save" button on the property listing. You can then view your saved properties by clicking on the "Saved Properties" tab in the navigation menu.'
                />
            <FaqItem
                question="How do I schedule a viewing for a property?"
                answer='To schedule a viewing for a property, click the "Schedule Viewing" button on the property listing. You will then be prompted to choose a date and time for the viewing.'
                />
            </div>
        </div>
      </div>
    );
}
  