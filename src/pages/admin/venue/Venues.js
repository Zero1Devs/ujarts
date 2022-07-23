import React, { useState } from "react";
import "../../../styles/index";
import AdminLayout from "../../../layouts/AdminLayout";
import VenuesList from "./VenuesList";
import AddVenue from "./AddVenue";
import Toggle from "../../../components/Toggle";
const Venues = () => {
  const [screen, setScreen] = useState(false);
  return (
    <AdminLayout>
      <Toggle
        OnClick={(e) => setScreen(e)}
        value={screen}
        options={["Venues List", "New Venue"]}
        width="400px"
      />
      {screen ? <AddVenue onClick={(e) => setScreen(e)} /> : <VenuesList />}
    </AdminLayout>
  );
};
export default Venues;
