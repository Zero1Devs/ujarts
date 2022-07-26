import React, { useEffect } from "react";
import "../styles/index.css";
import "../styles/customerLayout.css";
import CustomerLayout from "../layouts/CustomerLayout";
import styled from "styled-components";
import { EventList } from "./Events";
import Title from "../components/Title";
import { useVenuePresenter } from "./admin/venue/presenter";
import { observer } from "mobx-react-lite";
import Venue from "../components/Venue";

const Venues = observer(() => {
  const { getVenues, venues } = useVenuePresenter;
  useEffect(() => {
    getVenues();
    // eslint-disable-next-line
  }, []);
  return (
    <CustomerLayout>
      <Title width="190px" border={true} marginLeft="30px">
        Our Venues
      </Title>
      <VenuesList>
        {venues.map((venue, i) => (
          <Venue key={i} venue={venue}></Venue>
        ))}
      </VenuesList>
    </CustomerLayout>
  );
});
export default Venues;

const VenuesList = styled(EventList)``;
