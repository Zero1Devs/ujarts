import React, { useState } from "react";
import "../styles/index.css";
import "../styles/customerLayout.css";
import { FiCalendar, FiClock, FiMapPin, FiUsers } from "react-icons/fi";
import { observer } from "mobx-react";
import EventSummary from "./EventSummary";
import styled from "styled-components";
import { useEventPresenter } from "../pages/admin/event/presenter";
import { DownloadPhoto } from "../util/DownloadPhoto";
import { useEffect } from "react";
import image from "../assets/image.svg";

const Event = observer(({ id, event }) => {
  const { setActive } = useEventPresenter;
  const [url, setUrl] = useState(image);
  useEffect(() => {
    DownloadPhoto(event?.thumbnail).then((response) => {
      setUrl(response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <div>
      <EventCard
        onClick={() => {
          setActive(id);
        }}
      >
        <Thumbnail>
          <img alt="Event" src={url} />
          <EventType>{event?.event_types?.type}</EventType>
        </Thumbnail>
        <EventInfo>
          <EventName title="Event Name">{event?.name}</EventName>

          <label title="Date">
            <FiCalendar size="23" color="var(--darkerpurple)" />
            <span>
              Starts on {event?.schedule[0]?.date || "To be announced"}
            </span>
          </label>

          <label title="Venue">
            <FiMapPin size="23" color="var(--darkerpurple)" />
            <span>{event?.venues?.name}</span>
          </label>

          <label title="Presented by">
            <FiUsers size="23" color="var(--darkerpurple)" />
            <span>{event?.host || "UJ Arts & Culture"}</span>
          </label>

          <label title="Duration">
            <FiClock size="23" color="var(--darkerpurple)" />
            {
              //event?.schedule[0]?.start_time-event?.schedule[0]?.end_time new Date()  <span>{event?.duration || "N/A"}</span>
            }
          
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
  width: 351px;
  border-radius: 5px;
  background-color: #eeeded;
  color: var(--darkerpurple);
  filter: drop-shadow(2px 2px 4px var(--grey));
  padding: 10px;
  padding-top: 30px;
  cursor: pointer;
  margin: 18px;
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
  @media only screen and (max-width: 600px) {
    width: 75vw;
    height: auto;
    margin: 5px;
  }
`;
export const EventName = styled.label`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  font-family: "Poppins";
`;
export const Thumbnail = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 0px;
  width: 320px;
  filter: drop-shadow(2px 2px 4px var(--grey));
  margin: auto;
  img {
    border-radius: 10px;
    border-bottom-left-radius: 0;
    width: 100%;
    height: 210px;
  }
  @media screen and (max-width: 600px) {
    img {
      width: 87%;
      height: 100%;
    }
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
