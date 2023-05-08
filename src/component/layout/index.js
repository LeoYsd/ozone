import AuthNav from "../nav/authNav";
import HeroLayout from "../LandingPage/hero";
import SliderContainer from "../common/slider/sliderContainer";

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
    </div>
);

export default LandingPageLayout;

export const AuthLayout = ({ children }) => (
        <div className="">
                <div className="bg-dark py-5">
                    <AuthNav />
                </div>
            <div className="w-full">{children}</div>
        </div>
    );
