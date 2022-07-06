import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { observer } from "mobx-react";
import { useVenuePresenter } from "../../pages/admin/venue/presenter";

const VenueForm = observer(({ venue }) => {
  const { setFormValue, createVenue, updateVenue } = useVenuePresenter;

  return (
    <div className="loginForm" style={{ width: "50%" }}>
      <Input
        className="textInput"
        type="text"
        placeholder="Name"
        name="name"
        defaultValue={venue?.name}
        onChange={(e) => setFormValue(e)}
      />
      <Input
        className="textInput"
        type="text"
        placeholder="Address"
        name="address"
        defaultValue={venue?.address}
        onChange={(e) => setFormValue(e)}
      />
      <label>Number of seats</label>
      <Input
        className="textInput"
        type="number"
        min="1"
        defaultValue={venue?.seats || "1"}
        placeholder="Number of seats"
        name="seats"
        onChange={(e) => setFormValue(e)}
      />
      <Button
        text={venue ? "Update Venue" : "Create Venue"}
        className="btnBookNow"
        style={{ width: "97%", marginTop: "10px" }}
        onClick={venue ? () => updateVenue() : () => createVenue()}
      />
    </div>
  );
});
export default VenueForm;
