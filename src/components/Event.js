import React from "react";
import "../styles/index.css";
import "../styles/customerLayout.css";
import thumbnail from "../assets/thumbnail.jpg";
import { Calendar, MapPin, Users } from "react-feather";
import { observer } from "mobx-react";
import { UiStore } from "../stores/uiStore";
import EventSummary from "./EventSummary";
import styled from "styled-components";

const Event = observer(({ id, data }) => {
  const { setFormValue } = UiStore;
  return (
    <div>
      <EventCard
        onClick={() => {
          setFormValue(id);
        }}
      >
        <Thumbnail>
          <img alt="Event" src={thumbnail} />
          <EventType>{data.type}</EventType>
        </Thumbnail>
        <EventInfo>
          <EventName title="Event Name">
            Urban Soundscapes- Crafting Spaces of Belonging
          </EventName>

          <label title="Venue">
            <MapPin size="23" color="#f25622" />
            <span>Kingsway Campus A1</span>
          </label>

          <label title="Date">
            <Calendar size="23" color="#f25622" />
            <span>11/06/2022 to 30/08/2022</span>
          </label>

          <label title="Presented by">
            <Users size="23" color="#f25622" />
            <span>UJ Arts Gallery</span>
          </label>
        </EventInfo>
      </EventCard>
      <EventSummary id={id} />
    </div>
  );
});
export default Event;

//style
const EventCard = styled.div`
  border: solid 0px;
  height: auto;
  height: 454px;
  width: 361px;
  border-radius: 5px;
  background-color: #eeeded;
  color: var(--darkerpurple);
  filter: drop-shadow(2px 2px 4px var(--gray));
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
    display: flex;
    text-align: left;
    margin: 5px;
    padding: 4px;
  }
`;
const EventName = styled.label`
  font-size: 20px;
  font-weight: bold;
  font-family: "Poppins";
`;
const Thumbnail = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 0px;
  width: 325px;
  filter: drop-shadow(2px 2px 4px var(--gray));
  margin: auto;
  img {
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
    height: 233px;
  }
`;
const EventType = styled.span`
  background: var(--orange);
  color: white;
  border-top-right-radius: 6px;
  width: 100px;
  padding: 10px;
  height: 20px;
  text-align: center;
  margin-top: -40px;
`;
const EventInfo = styled.div`
  margin: 10px;
`;
