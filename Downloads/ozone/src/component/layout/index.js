import { Toaster } from "react-hot-toast";
import AuthNav from "../nav/authNav";
import HeroLayout from "../LandingPage/hero";
import SliderContainer from "../common/slider/sliderContainer";
import FAQ from "../common/faq/faqComponent";
import Footer from "../common/footer/footer";

const LandingPageLayout = ({ children }) => (
    <div className="">
        <div className="hero">
            <Toaster/>
            <div className="bg-[#1E1A2FD9] pt-4">
                <AuthNav />
                <HeroLayout />
            </div>
        </div>
        <div className="w-full grid place-items-center">
            <div className="w-[90%]">{children}</div>
        </div>
        <SliderContainer  />
        <FAQ />
        <Footer />
    </div>
);

export default LandingPageLayout;

export const AuthLayout = ({ children }) => (
    <div>
        <Toaster />
        <div className="w-full bg-dark min-h-screen pb-8">{children}</div>
    </div>
);
