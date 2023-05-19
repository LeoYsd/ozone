import { properties } from "../../utils/constants/listings";
import { Link } from "react-router-dom";
import { CREATE_LISTING } from "../../utils/constants/pages";
import CustomButton from "../common/button";

const OwnedPropertiesTable = () => {
    return (
      <>
        <div className="flex justify-center items-center pb-3 mt-6 border-b-[1px] border-b-[#FFFFff66] uppercase text-white font-bold pl-3">
          <div className="w-[50%]">Properties</div>
          <div className="w-[17%] text-center">Floor price</div>
          <div className="w-[17%] text-center">Valuation</div>
          <div className="w-[17%] text-center">Status</div>
        </div>
        <div className="flex justify-center items-center text-white pl-3">
        <ul style={{ listStyle: "none", padding: 0, width: "100%" }}>
          {properties.map((property) => (
            <li key={property.id} style={{ width: "100%", marginBottom: "15px", backgroundColor: "#1E1A2F", color: "#FFFFFF" }}>
              <div style={{ display: "flex", alignItems: "center", padding: "15px", paddingLeft: "0px" }}>
                <img src={property.image} alt={property.name} style={{ marginRight: "10px", width: "50px" }} />
                <div className="w-[48%]">
                  <p>{property.name}</p>
                  <p>{property.location}</p>
                </div>
                <div className="w-[50%]" style={{ display: "flex", justifyContent: "space-between" }}>
                  <div className="w-[30%] text-center">{property.price}</div>
                  <div className="w-[30%] text-center">{property.valuation}</div>
                  <div className="w-[30%] text-center">{property.status}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        </div>
        <div className="grid place-items-center w-full mt-10">
          <Link path={CREATE_LISTING}>
            <CustomButton style={{ background: "linear-gradient(94.72deg, rgba(239, 141, 248, 0.8) -31.25%, rgba(156, 148, 254, 0.8) 139.69%, rgba(239, 141, 248, 0) 139.69%)" }} color="white">
              Create a listing
            </CustomButton>
          </Link>
        </div>
      </>
    )
};

export default OwnedPropertiesTable;