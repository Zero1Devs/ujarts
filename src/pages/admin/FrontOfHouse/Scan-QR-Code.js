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
  //  RenderTable();
  }, [guest]);

  const RenderTable = (data) => {
    return (
      <>
        {data !== "No result" && (
          <Table style={{marginBottom:"50px"}}>
            <DataTable columns={columns} data={data} fixedHeader />
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
      {RenderTable(table)}
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
const table= [
  {
    id: "#001",
    name: "Vivaldo Gaston",
    event:
      "Artist Walkabout :: Urban Soundscapes - Crafting Spaces of Belonging",
    tickets: "2x Early Bird",
    reference: "1662199160261",
  },
];
