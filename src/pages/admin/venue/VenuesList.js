import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../../styles/index";
import Title from "../../../components/Title";
import * as Icon from "react-icons/fi";
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
      <Icon.FiEdit color="black" size={25} />
    </Link>
  );
};
const DeleteButton = (id) => {
  const { deleteVenue } = useVenuePresenter;
  return (
    <Icon.FiTrash2
      style={{ cursor: "pointer" }}
      onClick={() => deleteVenue(id)}
      color="red"
      size={25}
    />
  );
};

const VenuesList = observer(() => {
  const { getVenues, venues } = useVenuePresenter;
  useEffect(() => {
    getVenues();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Header>
        <Title width="200px">Venues List</Title>

        <Link to="/admin/venues/add">
          <Button
            width={"170px"}
            background="var(--darkpurple)"
            hover="var(--darkerpurple)"
          >
            <Icon.FiPlus size={20} />
            <span>Add Venue</span>
          </Button>
        </Link>
      </Header>
      <Table>
        <DataTable columns={columns} data={venues} fixedHeader />
      </Table>
    </>
  );
});
export default VenuesList;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 0px;
  align-items: center;
};
`;
export const Table = styled.div`
  max-width: 80vw;

  border-radius: 5px;
  filter: drop-shadow(2px 2px 2px var(--grey));
`;