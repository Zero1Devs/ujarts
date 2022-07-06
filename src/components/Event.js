import React from "react";
import "../styles/index.css";
import "../styles/customerLayout.css";
import thumbnail from "../assets/thumbnail.jpg";
import { Calendar, MapPin, Users } from "react-feather";
import { observer } from "mobx-react";
import { UiStore } from "../stores/uiStore";
import EventSummary from "./EventSummary";

const Event = observer(({ id, data }) => {
  const { setFormValue } = UiStore;
  return (
    <div>
      <div
        className="eventCard"
        onClick={() => {
          setFormValue(id);
        }}
      >
        <div className="thumbnail">
          <img alt="Event" src={thumbnail} />
          <span className="eventType">{data.type}</span>
        </div>
        <div className="eventInfo">
          <label className="eventName" title="Event Name">
            Urban Soundscapes- Crafting Spaces of Belonging
          </label>

          <label className="" title="Venue">
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
        </div>
      </div>
      <EventSummary id={id} />
    </div>
  );
});
export default Event;
