import React from "react";
import Title from "../../../components/Title";
import SearchInput from "../../../components/SearchInput";
import * as Icon from "react-icons/fi";
import { Header, Table } from "../venue/VenuesList";
import DataTable from "react-data-table-component";
import Button from "../../../components/Button";

import {
  BsCashCoin,
  BsCoin,
  BsReceiptCutoff,
  BsFillPeopleFill,
  BsDownload,
} from "react-icons/bs";
import AdminLayout from "../../../layouts/AdminLayout";
import styled from "styled-components";

const PromoList = () => {
  return (
    <AdminLayout>
      <Title width="210px">Ticket Sales</Title>

      <Card style={{ background: "#F0652F", color: "white" }}>
        <>
          <h4>
            <b>Sales Today</b>
            <BsCoin color="#4F2365" size={20} />
          </h4>
          <p>R250</p>
        </>
      </Card>
      <Card style={{ background: "#E9E9E9", color: "black" }}>
        <>
          <h4>
            <b>Total Earning</b>
            <BsCashCoin color="#4F2365" size={20} />
          </h4>
          <p>R1500</p>
        </>
      </Card>
      <Card style={{ background: "#E9E9E9", color: "black" }}>
        <>
          <h4>
            <b>Total Tickets Sold</b>
            <BsReceiptCutoff color="#FF520F" size={20} />
          </h4>
          <p>103</p>
        </>
      </Card>
      <Card style={{ background: "#4F2365", color: "white" }}>
        <>
          <h4>
            <b>Number of Audience</b>
            <BsFillPeopleFill color="white" size={20} />
          </h4>
          <p>65</p>
        </>
      </Card>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          width="100px"
          background="#3C8F53"
          hover="var(--darkpurple)"
          style={{ float: "right" }}
          onClick={() => alert("download table")}
        >
          <BsDownload color="white" size={20} />
          Export
        </Button>
      </div>
      <Table>
        <DataTable
          columns={columns}
          data={data}
          fixedHeader
          expandableRows
          expandableRowsComponent={ExpandedComponent}
        />
      </Table>
    </AdminLayout>
  );
};
export default PromoList;

const columns = [
  {
    name: "No.",
    selector: (row) => row.no,
    sortable: true,
    width: "120px",
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Booking Dates",
    selector: (row) => row.booking_date,
    sortable: true,
    width: "30%",
  },
  {
    name: "Ticket Ref",
    selector: (row) => row.ticket_ref,
    sortable: true,
  },

  {
    name: "Ticket Qty",
    selector: (row) => row.ticket_qty,
    sortable: true,
  },
  {
    name: "Payment Method",
    selector: (row) => row.payment_method,
    sortable: true,
  },
  {
    name: "Total",
    selector: (row) => row.total,
    sortable: true,
  },
];
const data = [
  {
    no: "1",
    name: "Jasmin",
    email: "jasmin@gmail.com",
    booking_date: "08/06/2022",
    ticket_qty: "1",
    ticket_ref: "Sf3267",
    ticket_type: "Choir",
    payment_method: "Credit Card",
    total: "150",
  },
  {
    no: "2",
    name: "Johan",
    email: "johon211@gmail.com",
    booking_date: "12/06/2022",
    ticket_qty: "2",
    ticket_ref: "rt7667",
    ticket_type: "Dance",
    payment_method: "Debit Card",
    total: "350",
  },
  {
    no: "3",
    name: "Johan",
    email: "johon211@gmail.com",
    booking_date: "12/06/2022",
    ticket_qty: "2",
    ticket_ref: "rt7667",
    ticket_type: "Theatre",
    payment_method: "Debit Card",
    total: "100",
  },
];

const Card = styled.button`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 20px;

  transition: 0.3s;
  width: 21%;
  border: none;
  border-radius: 5px;
`;
const ExpandedComponent = ({ data }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);
const Container = styled.button``;
