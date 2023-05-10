import { Table } from "evergreen-ui";
import { OptionsIcon } from "../../assets/svgs";
import { properties } from "../../utils/constants/listings";

const OwnedPropertiesTable = () => {
    return (
        <Table color="#FFFFFF">
  <Table.Head backgroundColor="#1E1A2F" color="#FFFFFF">
    <Table.TextHeaderCell>7 PROPERTIES</Table.TextHeaderCell>
    <Table.TextHeaderCell>FLOOR PRICE</Table.TextHeaderCell>
    <Table.TextHeaderCell>VALUATION</Table.TextHeaderCell>
    <Table.TextHeaderCell>STATUS</Table.TextHeaderCell>
  </Table.Head>
  <Table.Body height={240}>
    {properties.map((property) => (
      <Table.Row key={property.id} onSelect={() => alert(property.name)}  backgroundColor="#1E1A2F" color="#FFFFFF" marginY="20px">
        <Table.TextCell color="#FFFFFF" marginBottom="20px">
            <div className="flex items-center text-white">
                <img src={property.image} alt={property.name} />
                <div className="ml-3">
                    <p>{property.name}</p>
                    <p>{property.location}</p>
                </div>
            </div>
        </Table.TextCell>
        <Table.TextCell><p className="text-white">{property.price}</p></Table.TextCell>
        <Table.TextCell><p className="text-white">{property.valuation}</p></Table.TextCell>
        <Table.TextCell>
            <div className="flex items-center text-white">
                {property.status}
                <div className="ml-8">
                    {OptionsIcon}
                </div>
            </div>
        </Table.TextCell>
      </Table.Row>
    ))}
  </Table.Body>
</Table>
    )
};

export default OwnedPropertiesTable;