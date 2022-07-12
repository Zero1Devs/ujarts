import React, { useEffect } from "react";
import { useVenuePresenter } from "./presenter";
import { observer } from "mobx-react";
import VenueForm from "../../../components/Forms/VenueForm";
import { NavigationStore } from "../../../stores/navigationStore";
import AdminLayout from "../AdminLayout";
import Title from "../../../components/Title";

const UpdateVenue = observer(() => {
  const { updateVenue, venue } = useVenuePresenter;
  const navigation = NavigationStore;
  useEffect(() => {
    if (venue.id === 0) {
      alert("No venue selected");
      navigation.push("/admin/venues");
      console.log(venue);
    }
    // eslint-disable-next-line
  }, []);
  return (
    <AdminLayout>
      <Title width="230px">Update Venue</Title>
      <div
        className="container"
        style={{ alignItems: "center", border: "none" }}
      >
        <VenueForm venue={venue} onClick={updateVenue} />
      </div>
    </AdminLayout>
  );
});
export default UpdateVenue;
