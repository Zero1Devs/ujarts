import React from "react";
import Title from "../../../components/Title";
import SearchInput from "../../../components/SearchInput";
import * as Icon from "react-icons/fi";
import { Header, Table } from "../venue/VenuesList";
import DataTable from "react-data-table-component";
import search from "../../../assets/search.svg";
const PromoList = () => {
  return (
    <>
      <Title width="210px">Promo Codes List</Title>
      <Header>
        <SearchInput
          width="300px"
          type="search"
          name="search"
          placeholder="Search Here"
          background={search}
          onChange={(e) => console.log(e.target.value)}
        />
      </Header>
      <Table>
        <DataTable columns={columns} data={data} fixedHeader />
      </Table>
    </>
  );
};
export default PromoList;

const columns = [
  {
    name: "Promo ID",
    selector: (row) => row.id,
    sortable: true,
    width: "120px",
  },
  {
    name: "Promo Code",
    selector: (row) => row.code,
    sortable: true,
  },
  {
    name: "Discount",
    selector: (row) => row.discount,
    sortable: true,
  },
  {
    name: "Event Name",
    selector: (row) => row.eventName,
    sortable: true,
    width: "30%",
  },
  {
    name: "Event ID",
    selector: (row) => row.eventId,
    sortable: true,
  },
  {
    button: true,
    cell: (row) => <EditButton row={row} />,
  },
  {
    button: true,
    cell: (row) => <DeleteButton id={row.id} />,
  },
];
const data = [
  {
    id: "#003",
    code: "SHOWTIME123",
    discount: "30%",
    eventName: "Futures and Beyond :: Creativity and 4IR Conference 2022",
    eventId: "#008",
  },
  {
    id: "#002",
    code: "ArtStudent",
    discount: "100%",
    eventName: "Urban Soundscapes- Crafting Spaces of Belonging",
    eventId: "#003",
  },
];

const EditButton = ({ row }) => {
  return (
    <Icon.FiEdit color="black" size={25} onClick={() => alert("updated")} />
  );
};
const DeleteButton = (id) => {
  return (
    <Icon.FiTrash2
      style={{ cursor: "pointer" }}
      onClick={() => alert("deleted")}
      color="red"
      size={25}
    />
  );
};
