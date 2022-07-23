import React from "react";
import { observer } from "mobx-react";
import VenueForm from "../../../components/Forms/VenueForm";
import { StyledH2 } from "../../../components/Title";
import styled from "styled-components";
const AddVenue = observer(() => {
  return (
    <>
      <Title>New Venue</Title>
      <div
        className="container"
        style={{ alignItems: "center", border: "none" }}
      >
        <VenueForm />
      </div>
    </>
  );
});
export default AddVenue;
const Title = styled(StyledH2)`
  width: 180px;
  text-align: center;
`;
