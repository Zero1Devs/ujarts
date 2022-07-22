import React from "react";
import "../styles/index.css";
import "../styles/customerLayout.css";
import CustomerLayout from "../layouts/CustomerLayout";
import styled from "styled-components";
import { EventList } from "./Events";
import Title from "../components/Title";

const Venues = () => {
  return (
    <CustomerLayout>
      <Title width="190px" border={true} marginLeft="30px">
        Our Venues
      </Title>
      <VenuesList>
        <div className="eventCard"></div>
        <div className="eventCard"></div>
        <div className="eventCard"></div>
        <div className="eventCard"></div>
        <div className="eventCard"></div>
      </VenuesList>
    </CustomerLayout>
  );
};
export default Venues;

const VenuesList = styled(EventList)``;
