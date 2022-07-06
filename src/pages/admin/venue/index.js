import React from "react";
import DataTable, { ExpanderComponentProps } from "react-data-table-component";
import "../../../styles/index";
import * as Icon from "react-feather";
import AdminLayout from "../AdminLayout";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
  {
    name: "Edit",
    cell: () => <Icon.Edit color="black" width={25}/>,
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

const Venues = () => {
  return (
    <AdminLayout>
      <div
        className="btnFullDetails"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "170px",
          cursor: "pointer",
        }}
        onClick={() => alert("Hey")}
      >
        <Icon.Plus size={20} />
        <span>Add Venue</span>
      </div>

      <DataTable columns={columns} data={data} />
    </AdminLayout>
  );
};
export default Venues;
