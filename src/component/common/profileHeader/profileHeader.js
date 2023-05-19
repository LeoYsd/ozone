import ProfileNav from "./profileNav";
import BannerImage from "../../../assets/images/Banner.jpg";
import ProfileImg from "../../../assets/images/ProfilePic.png";

const ProfileHeader = () => {
    return (
        <>
            <div className="bg-dark">
                <ProfileNav />
            </div>
            
            <div className="w-full h-[350px] bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${BannerImage})` }}>
                <div className="absolute -bottom-4 left-[2rem]">
                    <div className="bg-black rounded-full p-2 w-[140px] h-[140px] grid place-items-center">
                        <img src={ProfileImg} alt="profile-pic" className="w-full" />
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default ProfileHeader;
