import React, { useEffect } from "react";
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
//import { useFinancePresenter } from "./presenter";
const PromoList = () => {
  /* const { getOrders, orders } = useFinancePresenter;
  useEffect(() => {
    getOrders();
  }, []);*/
  return (
    <AdminLayout>
      <Title width="210px">Ticket Sales</Title>
      <Card style={{ background: "#F0652F", color: "white" }}>
        <>
          <h4>
            <b>Sales Today</b>
            <BsCoin color="#4F2365" size={20} />
          </h4>
          <p>R300</p>
        </>
      </Card>
      <Card style={{ background: "#E9E9E9", color: "black" }}>
        <>
          <h4>
            <b>Total Earning</b>
            <BsCashCoin color="#4F2365" size={20} />
          </h4>
          <p>R600</p>
        </>
      </Card>
      <Card style={{ background: "#E9E9E9", color: "black" }}>
        <>
          <h4>
            <b>Total Tickets Sold</b>
            <BsReceiptCutoff color="#FF520F" size={20} />
          </h4>
          <p>5</p>
        </>
      </Card>
      <Card style={{ background: "#4F2365", color: "white" }}>
        <>
          <h4>
            <b>Number of Audience</b>
            <BsFillPeopleFill color="white" size={20} />
          </h4>
          <p>5</p>
        </>
      </Card>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          width="100px"
          background="#3C8F53"
          hover="var(--darkpurple)"
          style={{ float: "right" }}
          onClick={() => downloadCSV(data)}
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
    selector: (row) => row.id,
    sortable: true,
    width: "120px",
  },
  {
    name: "Name",
    selector: (row) => row.name + " " + row.surname,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Booking Date",
    selector: (row) => row.created_at,
    sortable: true,
  },
  {
    name: "Ticket Ref",
    selector: (row) => row.reference_number,
    sortable: true,
  },

  {
    name: "Ticket Qty",
    selector: (row) => row.quantity,
    sortable: true,
  },
  {
    name: "Payment Method",
    selector: (row) => row.payment_type,
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
    id: "1",
    name: "Zacharias Siphoro",
    email: "zachariasiphoro@gmail.com",
    created_at: "21/09/2022",
    quantity: "1",
    reference_number: "1663764713375",
    ticket_type: "Early Bird",
    payment_type: "Credit Card",
    total: "150",
  },
  {
    id: "2",
    name: "Zacharias Siphoro",
    email: "zachariasiphoro@gmail.com",
    created_at: "21/09/2022",
    quantity: "2",
    reference_number: "2683745713375",
    ticket_type: "Early Bird",
    payment_type: "Cash",
    total: "150",
  },
  {
    id: "3",
    name: "Vivaldo Gaston",
    email: "vivaldo2009@live.com.pt",
    created_at: "03/09/2022",
    quantity: "2",
    reference_number: "1662199160261",
    ticket_type: "Early Bird",
    payment_type: "Credit Card",
    total: "300",
  },
  {
    id: "3",
    name: "Nandi Dithebe",
    email: "nandi@live.com.pt",
    created_at: "18/10/2022",
    quantity: "1",
    reference_number: "165488789787",
    ticket_type: "General Admission",
    payment_type: "Credit Card",
    total: "125",
  },
];

//Export data
function convertArrayOfObjectsToCSV(array) {
  let result;

  const columnDelimiter = "\t";
  const lineDelimiter = "\n";
  const keys = Object.keys(data[0]);

  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  array.forEach((item) => {
    let ctr = 0;
    keys.forEach((key) => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];
      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}

function downloadCSV(array) {
  const link = document.createElement("a");
  let csv = convertArrayOfObjectsToCSV(array);
  if (csv == null) return;

  const filename = "export.xls";

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute("href", encodeURI(csv));
  link.setAttribute("download", filename);
  link.click();
}

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
