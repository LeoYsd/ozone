import AuthNav from "../nav/authNav";
import HeroLayout from "../LandingPage/hero";
import SliderContainer from "../common/slider/sliderContainer";
import FAQ from "../common/faq/faqComponenet";

const LandingPageLayout = ({ children }) => (
    <div className="">
        <div className="hero mb-10">
            <div className="bg-[#1E1A2FD9] py-5">
                <AuthNav />
                <HeroLayout />
            </div>
        </div>
        <div className="px-20">{children}</div>
        <SliderContainer  />
        <FAQ />
    </div>
);

export default LandingPageLayout;