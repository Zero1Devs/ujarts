import React from "react";
import Title from "../../../components/Title";
import { StyledInput } from "../../../components/Input";
import styled from "styled-components";
import { Header } from "../venue/VenuesList";
import DataTable from "react-data-table-component";
import { Table } from "../venue/VenuesList";
import search from "../../../assets/search.svg";
import FrontOfHouseLayout from "../../../layouts/FrontOfHouseLayOut";

const GuestListSearch = () => {
  return (
    <FrontOfHouseLayout>
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
    </FrontOfHouseLayout>
  );
};
export default GuestListSearch;

const columns = [
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
    name: "DateTime",
    selector: (row) => row.date,
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
    cust_details: "Zacharias Siphoro",
    name: "MY EARLY JAZZ EDUCATION (AND THE ONE I WANT FOR MY STUDENTS)",
    date: "29 Sep @ 15:25pm",
    ticket_qty: 1,
    ticket_type: "Early Bird",
    ticket_ref: "1663764713375",
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
