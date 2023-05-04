import AuthNav from "../nav/authNav";
import HeroLayout from "./hero";

const LandingPageLayout = ({ children }) => (
    <div className="">
        <div className="hero h-screen">
            <div className="bg-[#1E1A2FD9] h-screen">
                <AuthNav />
                    <HeroLayout>
                        {children}
                    </HeroLayout>
            </div>
        </div>
    </div>
);

export default LandingPageLayout;