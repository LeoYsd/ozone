import AuthNav from "../nav/authNav";

const LandingPageLayout = ({ children }) => (
    <div>
        <AuthNav />
        <div className="my-8">
            {children}
        </div>
    </div>
);

export default LandingPageLayout;