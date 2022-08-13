import React from "react";
import Title from "../../../components/Title";
import { StyledInput } from "../../../components/Input";
import styled from "styled-components";
import { Header } from "../venue/VenuesList";
import DataTable from "react-data-table-component";
import { Table } from "../venue/VenuesList";
import search from "../../../assets/search.svg";
import FrontOfHouseLayOut from "../../../layouts/FrontOfHouseLayOut";

const GuestListSearch = () => {
  return (
    <FrontOfHouseLayOut>
      <Title width="300px">Guest List</Title>
      <Header>
        <Input
          width="300px"
          type="search"
          name="search"
          placeholder="Search Here"
          background={search}
          onChange={(e) => console.log(e.target.value)}
        />
      </Header>
      <Table>
        <DataTable
          columns={columns}
          data={data}
          fixedHeader
          expandableRows
          expandableRowsComponent={ExpandedComponent}
        />
      </Table>
    </FrontOfHouseLayOut>
  );
};
export default GuestListSearch;

const columns = [
  {
    name: "Booking.ID",
    selector: (row) => row.booking_id,
    sortable: true,
  },
  {
    name: "Cust.Details",
    selector: (row) => row.cust_details,
    sortable: true,
  },
  {
    name: "Event Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Event ID",
    selector: (row) => row.event_id,
    sortable: true,
  },
  {
    name: "Ticket Qty",
    selector: (row) => row.ticket_qty,
    sortable: true,
  },
  {
    name: "Ticket Type",
    selector: (row) => row.ticket_type,
    sortable: true,
  },
  {
    name: "Ticket Ref",
    selector: (row) => row.ticket_ref,
    sortable: true,
  },
];
const data = [
  {
    booking_id: "#0063",
    cust_details: "Jay Green jaygreen@gmail.com 071 626 6666",
    name: "Futures and Beyond :: Creativity and 4IR Conference 2022",
    event_id: "#008",
    ticket_qty: 2,
    ticket_type: "General",
    ticket_ref: "Sf3267",
  },
];

const ExpandedComponent = ({ data }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);

const Input = styled(StyledInput)`
  background: white url(${({ background }) => background}) no-repeat scroll 7px
    7px;
  padding-left: 35px;
  :focus {
    outline: none !important;
    border: 2px solid var(--darkpurple);
  }
`;
