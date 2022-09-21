import React, { useEffect } from "react";
import Title from "../../../components/Title";
import SearchInput from "../../../components/SearchInput";
import * as Icon from "react-icons/fi";
import { Header, Table } from "../venue/VenuesList";
import DataTable from "react-data-table-component";
import search from "../../../assets/search.svg";
import { observer } from "mobx-react";
import { usePromoPresenter } from "./presenter";

const PromoList = observer(() => {
  const { getPromo, promos } = usePromoPresenter;
  useEffect(() => {
    getPromo();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Title width="210px">Promo Codes List</Title>
      <Header>
        <SearchInput
          width="300px"
          type="search"
          name="search"
          placeholder="Search Here"
          background={search}
          onChange={(e) => console.log(e.target.value)}
        />
      </Header>
      <Table>
        <DataTable columns={columns} data={promos} fixedHeader />
      </Table>
    </>
  );
});
export default PromoList;

const columns = [
  {
    name: "Promo ID",
    selector: (row) => row.id,
    sortable: true,
    width: "120px",
  },
  {
    name: "Promo Code",
    selector: (row) => row.promo_code,
    sortable: true,
  },
  {
    name: "Discount",
    selector: (row) => row.discount,
    sortable: true,
  },
  {
    name: "Event ID",
    selector: (row) => row.event.id,
    sortable: true,
  },
  {
    name: "Event Name",
    selector: (row) => row.event.name,
    sortable: true,
    width: "30%",
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
  return (
    <Icon.FiEdit color="black" size={25} onClick={() => alert("updated")} />
  );
};
const DeleteButton = (id) => {
  const { deletePromo } = usePromoPresenter;
  return (
    <Icon.FiTrash2
      style={{ cursor: "pointer" }}
      onClick={() => deletePromo(id)}
      color="red"
      size={25}
    />
  );
};
