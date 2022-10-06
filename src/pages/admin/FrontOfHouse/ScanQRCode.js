import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import Title from "../../../components/Title";
import FrontOfHouseLayout from "../../../layouts/FrontOfHouseLayOut";
import { useBookingPresenter } from "../../booking/presenter";
import DataTable from "react-data-table-component";
import { Table } from "../venue/VenuesList";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

const ScanQRCode = observer(() => {
  const [data, setData] = useState("No result");
  const { getGuest, guest } = useBookingPresenter;

  useEffect(() => {
    getGuest(data);
  }, [data]);

  return (
    <FrontOfHouseLayout>
      <Title width="300px">Guest List</Title>
      <h3 border="2px solid blue">Reference: {data}</h3>
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
      {data !== "No result" && (
        <Table style={{ marginBottom: "50px" }}>
          <DataTable columns={columns} data={guest} fixedHeader />
        </Table>
      )}
    </FrontOfHouseLayout>
  );
});
export default ScanQRCode;
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
