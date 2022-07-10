import React from "react";
import { observer } from "mobx-react";
import VenueForm from "../../../components/Forms/VenueForm";
import AdminLayout from "../AdminLayout";
const AddVenue = observer(() => {
  return (
    <AdminLayout>
      <h1
        className="title"
        style={{
          width: "180px",
          textAlign: "center",
        }}
      >
        Add Venue
      </h1>
      <div
        className="container"
        style={{ alignItems: "center", border: "none" }}
      >
        <VenueForm />
      </div>
    </AdminLayout>
  );
});
export default AddVenue;
