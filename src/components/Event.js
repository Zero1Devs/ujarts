import React from "react";
import "../styles/index.css";
import "../styles/customerLayout.css";
import thumbnail from "../assets/thumbnail.jpg";
import { FiCalendar, FiClock, FiMapPin, FiUsers } from "react-icons/fi";
import { observer } from "mobx-react";
import EventSummary from "./EventSummary";
import styled from "styled-components";
import { useEventPresenter } from "../pages/admin/event/presenter";
const Event = observer(({ id, event }) => {
  const { setActive } = useEventPresenter;
  return (
    <div>
      <EventCard
        onClick={() => {
          setActive(id);
        }}
      >
        <Thumbnail>
          <img alt="Event" src={thumbnail} />
          <EventType>{event?.type}</EventType>
        </Thumbnail>
        <EventInfo>
          <EventName title="Event Name">{event?.name}</EventName>

          <label title="Date">
            <FiCalendar size="23" color="var(--darkerpurple)" />
            <span>{event?.dates}</span>
          </label>

          <label title="Venue">
            <FiMapPin size="23" color="var(--darkerpurple)" />
            <span>Kingsway Campus A1</span>
          </label>

          <label title="Presented by">
            <FiUsers size="23" color="var(--darkerpurple)" />
            <span>UJ Arts Gallery</span>
          </label>

          <label title="Duration">
            <FiClock size="23" color="var(--darkerpurple)" />
            <span>N/A</span>
          </label>
        </EventInfo>
      </EventCard>
      <EventSummary id={id} event={event} />
    </div>
  );
});
export default Event;

//style
export const EventCard = styled.div`
  border: solid 0px;
  height: 473px;
  width: 361px;
  border-radius: 5px;
  background-color: #eeeded;
  color: var(--darkerpurple);
  filter: drop-shadow(2px 2px 4px var(--grey));
  padding: 10px;
  padding-top: 40px;
  cursor: pointer;
  margin: 20px;
  text-align: center;
  :hover {
    animation: scale 1s;
  }
  @keyframes scale {
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  label {
    cursor: pointer;

    display: flex;
    text-align: left;
    margin: 5px;
    padding: 4px;
    span {
      margin-left: 10px;
      cursor: pointer;
    }
  }
`;
export const EventName = styled.label`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  font-family: "Poppins";
`;
export const Thumbnail = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 0px;
  width: 325px;
  filter: drop-shadow(2px 2px 4px var(--grey));
  margin: auto;
  img {
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
    height: 233px;
  }
`;
export const EventType = styled.span`
  background: var(--orange);
  color: white;
  border-top-right-radius: 6px;
  width: 100px;
  padding: 10px;
  height: 20px;
  text-align: center;
  margin-top: -40px;
`;
export const EventInfo = styled.div`
  cursor: pointer;
  margin: 10px;
`;
