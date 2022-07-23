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
    name: "Announcement ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Announcement Code",
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
