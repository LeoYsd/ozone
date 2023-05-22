import { properties } from "../../../utils/constants/listings";
import OwnedPropertiesTable from "../../table/ownedPropertiesTable";
import CustomButton from "../../common/button/index";
import { LANDING_PAGE_URL } from "../../../utils/constants/pages";

const ListingsTabContent = () => {
    return properties.length === 0 ? (
        <div className="border border-[#FFFFFF66] h-[400px] mt-5 w-full rounded-md flex flex-col items-center justify-center">
          <p className="text-center text-[1.2rem] mb-4 text-[#F5F5F5]">You currently have no listed property</p>
          <CustomButton
            color="white"
            border="none"
            fontSize="2rem"
            style={{ background: 'linear-gradient(94.71deg, #9C94FE -19.32%, #EF8DF8 126.64%)' }}
            href={LANDING_PAGE_URL}
          >
            Create your first listing
          </CustomButton>
        </div>
      ) : (
        <OwnedPropertiesTable />
      );
      
};

export default ListingsTabContent;
