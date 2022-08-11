import React from "react";
import Title from "../../../components/Title";
import { Header, Table } from "../venue/VenuesList";
import DataTable from "react-data-table-component";
import SearchInput from "../../../components/SearchInput";

const BookingList = () => {
  return (
    <>
      <Title>Booking List</Title>
      <Header>
        <SearchInput
          width="300px"
          type="search"
          name="search"
          placeholder="Search Here"
          onChange={(e) => console.log(e.target.value)}
        />
      </Header>
      <Table>
        <DataTable columns={columns} data={data} fixedHeader />
      </Table>
    </>
  );
};
export default BookingList;

const columns = [
  {
    name: "Booking ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Booking Code",
    selector: (row) => row.year,
    sortable: true,
  },
  {
    name: "Event",
    selector: (row) => row.title,
    sortable: true,
    width: "50%",
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
