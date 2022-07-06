import React from "react";
import EventForm from "../../../components/Forms/EventForm";
const UpdateEvent = () => {
  return (
    <div>
      <h1
        className="title"
        style={{
          width: "250px",
          textAlign: "center",
        }}
      >
        Update Event
      </h1>
      <div
        className="container"
        style={{
          alignItems: "center",
          border: "0px none red",
          marginBottom: "20vh",
        }}
      >
        <EventForm/>
      </div>
    </div>
  );
};
export default UpdateEvent;

