import React, { useEffect } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { observer } from "mobx-react";
import { useVenuePresenter } from "../../pages/admin/venue/presenter";
import styled from "styled-components";
import Select from "../Select";

const VenueForm = observer(({ venue }) => {
  const { setFormValue, createVenue, updateVenue, campuses, getCampuses } =
    useVenuePresenter;
  useEffect(() => {
    getCampuses();
    // eslint-disable-next-line
  }, []);
  return (
    <StyledForm>
      <label>Name</label>
      <Input
        className="textInput"
        type="text"
        placeholder="Name"
        name="name"
        defaultValue={venue?.name}
        onChange={(e) => setFormValue(e)}
      />

      <label>Campus</label>
      <Select
        value={venue?.campus.id}
        name="campus"
        onChange={(e) => setFormValue(e)}
        options={campuses}
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
        width="20%"
      />
      <Button
        className="btnBookNow"
        style={{ marginTop: "10px" }}
        background="var(--orange)"
        width={"100%"}
        hover="var(--darkorange)"
        onClick={venue ? () => updateVenue() : () => createVenue()}
      >
        {venue ? "Update Venue" : "Add Venue"}
      </Button>
    </StyledForm>
  );
});
export default VenueForm;

const StyledForm = styled.div`
  padding: 30px 40px;
  margin-left: 30px;
  height: 30%;
  filter: drop-shadow(2px 2px 4px #45116d);
  background: white;
  display: flex;
  flex-direction: column;

  width: 70%;
  border-radius: 5px;
`;
