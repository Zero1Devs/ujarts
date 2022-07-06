import React from "react";
import "../styles/index.css";
import "../styles/customerLayout.css";
import Event from "../components/Event";
import CustomerLayout from "../CustomerLayout";
import { observer } from "mobx-react";
import event from "./data";
const Events = observer(() => {
  return (
    <CustomerLayout>
      <div className="container">
        <h2
          className="title"
          style={{
            width: "140px",
          }}
        >
          What's On?
        </h2>
        <div style={{ alignSelf: "center" }}>
          <label>Filter by:</label>
          <select name="" id="select">
            <option disabled selected>
              Event Type
            </option>
            <option value={""}>All</option>
            <option value={""}>Comedy</option>
            <option value={""}>Dance</option>
            <option value={""}>Events</option>
            <option value={""}>Exhibitions</option>
            <option value={""}>Music</option>
            <option value={""}>Theatre</option>
          </select>
        </div>

        <div className="eventList">
          {event.map((data, id) => (
            <Event key={id} id={id} data={data} />
          ))}
        </div>
      </div>
    </CustomerLayout>
  );
});
export default Events;
