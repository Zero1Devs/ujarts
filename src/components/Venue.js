import React from "react";
import "../styles/index.css";
import "../styles/customerLayout.css";
import venuePhoto from "../assets/Studio1.jpg";
import styled from "styled-components";
import { FiMapPin } from "react-icons/fi";
import { MdEventSeat, MdCheckroom } from "react-icons/md";
import { FaWheelchair } from "react-icons/fa";
import { GiViolin } from "react-icons/gi";
import { EventCard, EventInfo, EventName, Thumbnail } from "./Event";
const Venue = ({ venue }) => {
  return (
    <VenueCard>
      <Thumbnail>
        <img alt="Venue" src={venuePhoto} />
      </Thumbnail>
      <VenueName title="Venue Name">{venue?.name}</VenueName>
      <VenueInfo>
        <label>
          <FiMapPin size="23" color="var(--darkerpurple)" />
          <span>{venue?.campus?.abbreviation} Campus</span>
        </label>
        <label>
          <MdEventSeat size="23" color="var(--darkerpurple)" />
          <span>Seating: {venue?.seats}</span>
        </label>
        <label>
          <GiViolin size="23" color="var(--darkerpurple)" />
          <span>Orchestra Pit: no</span>
        </label>
        <label>
          <MdCheckroom size="23" color="var(--darkerpurple)" />
          <span>Dressing Room: no</span>
        </label>
        <label>
          <FaWheelchair size="23" color="var(--darkerpurple)" />
          <span>Wheelchair Friendly: no</span>
        </label>
      </VenueInfo>
    </VenueCard>
  );
};
export default Venue;
const VenueCard = styled(EventCard)`
  height: 500px;
`;
const VenueInfo = styled(EventInfo)`
  text-align: left;
`;
const VenueName = styled(EventName)`
  margin: 30px;
`;
