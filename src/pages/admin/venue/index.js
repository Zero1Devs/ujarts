import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../../styles/index";
import * as Icon from "react-feather";
import AdminLayout from "../AdminLayout";
import { useVenuePresenter } from "./presenter";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import styled from "styled-components";

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
    width: "50%",
  },
  {
    name: "Campus",
    selector: (row) => row.campus.abbreviation,
    sortable: true,
  },
  {
    name: "Seats",
    selector: (row) => row.seats,
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

const EditButton = ({ row }) => {
  const { setVenue } = useVenuePresenter;
  return (
    <Link onClick={() => setVenue(row)} to={"update"}>
      <Icon.Edit color="black" width={25} />
    </Link>
  );
};
const DeleteButton = (id) => {
  const { deleteVenue } = useVenuePresenter;
  return (
    <Icon.Trash2
      style={{ cursor: "pointer" }}
      onClick={() => deleteVenue(id)}
      color="red"
      width={25}
    />
  );
};

const ListVenues = observer(() => {
  const { getVenues, venues } = useVenuePresenter;
  useEffect(() => {
    getVenues();
    // eslint-disable-next-line
  }, []);
  return (
    <AdminLayout>
      <Header>
        <h1 className="title">Venues List</h1>

        <Link to="/admin/venues/add">
          <Button
            width={"170px"}
            background="var(--darkpurple)"
            hover="var(--darkerpurple)"
          >
            <Icon.Plus size={20} />
            <span>Add Venue</span>
          </Button>
        </Link>
      </Header>
      <Table>
        <DataTable columns={columns} data={venues} fixedHeader />
      </Table>
    </AdminLayout>
  );
});
export default ListVenues;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 0px;
  align-items: center;
};
`;
const Table = styled.div`
  max-width: 80vw;
`;
