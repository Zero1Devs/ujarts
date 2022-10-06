import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Title from "../../../components/Title";
import FrontOfHouseLayout from "../../../layouts/FrontOfHouseLayout";
import styled from "styled-components";
import Button from "../../../components/Button";
import { BsFillCameraFill } from "react-icons/bs";
import Input from "../../../components/Input";
import { useBookingPresenter } from "../../booking/presenter";
import DataTable from "react-data-table-component";
import { Table } from "../venue/VenuesList";

const Search = observer(() => {
  const { getGuest, guest } = useBookingPresenter;
  const [reference, setReference] = useState("");
  const [table, setTable] = useState(false);
  useEffect(() => {
    getGuest(reference);
    // eslint-disable-next-line
  }, [reference]);

  return (
    <FrontOfHouseLayout>
      <Title width="300px">Guest List</Title>

      <Div>
        <Link to={"qr-code"}>
          <Button
            width="200px"
            height="200px"
            background=""
            color="black"
            hover="var(--darkpurple)"
            border="solid 1px var(--darkpurple)"
          >
            <h2>
              QR
              <br />
              Scan
              <br />
              <BsFillCameraFill />
            </h2>
          </Button>
        </Link>
        <h1>OR</h1>
        <Input
          color=" var(--darkpurple)"
          width="400px"
          type="text"
          name="customer_change"
          value={reference}
          placeholder="Reference number"
          onChange={(e) => setReference(e.target.value)}
        />

        <Button
          width="415px"
          background="var(--purple)"
          hover="var(--darkpurple)"
          border="solid 1px var(--darkpurple)"
          onClick={() => {
            getGuest(reference);
            setTable(true);
          }}
        >
          Search
        </Button>
        {table && (
          <div>
            <Table>
              <DataTable columns={columns} data={guest} />
            </Table>
          </div>
        )}
      </Div>
    </FrontOfHouseLayout>
  );
});
export default Search;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
`;

const columns = [
  {
    name: "Booking.ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Cust.Details",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Event Name",
    selector: (row) => row.event,
    sortable: true,
  },

  {
    name: "Tickets",
    selector: (row) => row.tickets,
    sortable: true,
  },

  {
    name: "Ticket Ref",
    selector: (row) => row.reference,
    sortable: true,
  },
];
