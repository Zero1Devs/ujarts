import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import Title from "../../../components/Title";
import FrontOfHouseLayOut from "../../../layouts/FrontOfHouseLayOut";
import { useBookingPresenter } from "../../booking/presenter";
import DataTable from "react-data-table-component";
import { Table } from "../venue/VenuesList";
import { useEffect } from "react";

const Scan_Qr_Code = () => {
  const [data, setData] = useState("No result");
  const { getGuest, guest } = useBookingPresenter;

  useEffect(() => {
    console.log("I render when DATA changes");
    getGuest(data);
  }, [data]);

  useEffect(() => {
    console.log("I render when Guest changes");
    RenderTable();
  }, [guest]);

  const RenderTable = () => {
    return (
      <>
        {data !== "No result" && (
          <Table>
            <DataTable columns={columns} data={guest} fixedHeader />
          </Table>
        )}
      </>
    );
  };
  return (
    <FrontOfHouseLayOut>
      <Title width="300px">Guest List</Title>
      <h3 border="2px solid blue">{data}</h3>
      <div style={{ width: "50%" }}>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
          }}
        />
      </div>
      {RenderTable()}
    </FrontOfHouseLayOut>
  );
};
export default Scan_Qr_Code;
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
