import React, { useEffect } from "react";
import Title from "../../../components/Title";
import { StyledInput } from "../../../components/Input";
import * as Icon from "react-icons/fi";
import { Header } from "../venue/VenuesList";
import DataTable from "react-data-table-component";
import { Table } from "../venue/VenuesList";
import styled from "styled-components";
import search from "../../../assets/search.svg";
import { useAnnouncementPresenter } from "./presenter";
import { observer } from "mobx-react";
const AnnouncementList = observer(() => {
  const { getAnnouncementList, announcements } = useAnnouncementPresenter;
  useEffect(() => {
    getAnnouncementList();
  });
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
        <DataTable columns={columns} data={announcements} fixedHeader />
      </Table>
    </>
  );
});
export default AnnouncementList;

const columns = [
  /*{
    name: "Time",
    selector: (row) => row.time,
    sortable: true,
    width:"80px",
  },*/
  {
    name: "Date",
    selector: (row) => row.date,
    sortable: true,
  } /*
  {
    name: "Form",
    selector: (row) => row.form,
    sortable: true,
  },*/,
  {
    name: "Announcement",
    selector: (row) => row.subject,
    sortable: true,
    width: "200px",
  },
  {
    name: "Event Name",
    selector: (row) => row.event.name,
    sortable: true,
    width: "30%",
  },
  {
    name: "Event ID",
    selector: (row) => row.event.id,
    sortable: true,
  },
  {
    button: true,
    cell: (row) => <DeleteButton id={row.id} />,
  },
];

const DeleteButton = (id) => {
  const { deleteAnnouncement } = useAnnouncementPresenter;
  return (
    <Icon.FiTrash2
      style={{ cursor: "pointer" }}
      onClick={() => deleteAnnouncement(id)}
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
