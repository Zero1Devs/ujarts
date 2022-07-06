import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useVenuePresenter } from "./presenter";
import { observer } from "mobx-react";
import VenueForm from "../../../components/Forms/VenueForm";
const UpdateVenue = observer(() => {
  const { setFormValue, updateVenue, venue } = useVenuePresenter;
  return (
    <div>
      <h1
        className="title"
        style={{
          width: "250px",
          textAlign: "center",
        }}
      >
        Update Venue
      </h1>
      <div
        className="container"
        style={{ alignItems: "center", border: "none" }}
      >
        <VenueForm venue={venue} onClick={updateVenue} />
      </div>
    </div>
  );
});
export default UpdateVenue;
