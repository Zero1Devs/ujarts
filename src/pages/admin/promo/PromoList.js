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
  },
  {
    name: "Promo Code",
    selector: (row) => row.year,
    sortable: true,
  },
  {
    name: "Event",
    selector: (row) => row.title,
    sortable: true,
    width: "50%",
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
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
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