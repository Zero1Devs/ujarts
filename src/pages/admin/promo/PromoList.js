import React from "react";
import Title from "../../../components/Title";
import { StyledInput } from "../../../components/Input";
import * as Icon from "react-feather";
import { Header } from "../venue";
import DataTable from "react-data-table-component";
import { Table } from "../venue";
import styled from "styled-components";
import search from "../../../assets/search.svg";
const PromoList = () => {
  return (
    <>
      <Title width="300px">Promo Codes List</Title>
      <Header>
        <Input
          width="300px"
          type="search"
          name="search"
          placeholder="Search Here"
          background={search}
          onChange={() => alert()}
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
    <Icon.Edit color="black" width={25} onClick={() => alert("updated")} />
  );
};
const DeleteButton = (id) => {
  return (
    <Icon.Trash2
      style={{ cursor: "pointer" }}
      onClick={() => alert("deleted")}
      color="red"
      width={25}
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

/*
Add New Promo Code
 <Link to="/admin/promo/add">
          <Button
            width={"170px"}
            background="var(--darkpurple)"
            hover="var(--darkerpurple)"
          >
            <Icon.Plus size={20} />
            <span>Create Promo Code</span>
          </Button>
        </Link>
 */
