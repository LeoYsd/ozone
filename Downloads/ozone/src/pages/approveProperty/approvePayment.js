import CustomButton from "../../component/common/button";
import { AuthLayout } from "../../component/layout";
import { toast } from "react-hot-toast";

const MakePayment = () => {
    return (
        <AuthLayout>
            <div className="flex justify-center items-center w-[100%] mx-auto pt-[100px]">
                    <img src="https://res.cloudinary.com/dboqyj4bp/image/upload/v1684451782/Rectangle-removebg-preview_uo4w7v.png" alt="confirm-payment" />
            </div>
            <div className="text-center w-full flex justify-center my-8">
                    <p className="w-[60%] text-white">
                    You are about to confirm payment for this property, <span className="text-purple">Ozone</span > holds your money in an Escrow account until the inspection is done so as to protect both parties.
                    </p>
            </div>
            <CustomButton style={{ background: "linear-gradient(94.72deg, rgba(239, 141, 248, 0.8) -31.25%, rgba(156, 148, 254, 0.8) 139.69%, rgba(239, 141, 248, 0) 139.69%)", height: "45px" }} color="white" handleClick={() => toast.success('Added to favorites')}>Approved</CustomButton>
        </AuthLayout>
    )
};

export default MakePayment;