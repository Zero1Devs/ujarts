import React from "react";
import Title from "../../../components/Title";
import { StyledInput } from "../../../components/Input";
import * as Icon from "react-icons/fi";
import { Header } from "../venue/VenuesList";
import DataTable from "react-data-table-component";
import { Table } from "../venue/VenuesList";
import styled from "styled-components";
import search from "../../../assets/search.svg";
const AnnouncementList = () => {
  return (
    <>
      <Title width="290px">Announcement List</Title>
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
        <DataTable columns={columns} data={data} fixedHeader />
      </Table>
    </>
  );
};
export default AnnouncementList;

const columns = [
  {
    name: "Time",
    selector: (row) => row.time,
    sortable: true,
    width:"80px",
  },
  {
    name: "Date",
    selector: (row) => row.date,
    sortable: true,
  },
  {
    name: "Form",
    selector: (row) => row.form,
    sortable: true,
  },
  {
    name: "Announcement",
    selector: (row) => row.announcement,
    sortable: true,
    width:"200px",
  },
  {
    name: "Event Name",
    selector: (row) => row.name,
    sortable: true,
    width: "30%",
  },
  {
    name: "Event ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    button: true,
    cell: (row) => <DeleteButton id={row.id} />,
  },
];
const data = [
  {
    id: "#008",
    time: "12:10",
    date: "09/07/2022",
    form: "Email",
    announcement: "Event Delayed",
    name: "Futures and Beyond :: Creativity and 4IR Conference 2022",
  },
  {
    id: "#003",
    time: "14:23",
    date: "05/07/2022",
    form: "Email",
    announcement: "Event Cancelled",
    name: "Urban Soundscapes- Crafting Spaces of Belonging",
  },

  {
    id: "#011",
    time: "10:09",
    date: "05/07/2022",
    form: "Email",
    announcement: "Event Schedule change",
    name: "UNFATHOMABLE",
  },
  {
    id: "#007",
    time: "14:23",
    date: "09/07/2022",
    form: "Email",
    announcement: "Event Cancelled",
    name: "Nesting Flight",
  },
];

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
const Input = styled(StyledInput)`
  background: white url(${({ background }) => background}) no-repeat scroll 7px
    7px;
  padding-left: 35px;
  :focus {
    outline: none !important;
    border: 2px solid var(--darkpurple);
  }
`;
