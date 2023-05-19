import { properties } from "../../utils/constants/listings";

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
      </>
    )
};

export default OwnedPropertiesTable;