import React, { useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { StyledToggle as Toggle, Option } from "../../../components/Toggle";
import { observer } from "mobx-react-lite";
import BookingList from "./BookingList";
import EventList from "./EventList";
import CreateEvent from "./CreateEvent";

const Events = observer(() => {
  const [screen, setScreen] = useState("event");

  return (
    <AdminLayout>
      <Toggle
        OnClick={(e) => setScreen(e)}
        width="400px"
  
      >
        <Option
          background={screen === "event" ? "var(--darkpurple)" : "none"}
          color={screen === "event" ? "white" : "black"}
          onClick={() => setScreen("event")}
        >
          Events List
        </Option>
        <Option
          background={screen === "new" ? "var(--darkpurple)" : "none"}
          color={screen === "new" ? "white" : "black"}
          onClick={() => setScreen("new")}
        >
          New Event
        </Option>
      </Toggle>
      {screen === "event" ? (
        <EventList onClick={() => setScreen("event")} />
      ) : screen === "booking" ? (
        <BookingList />
      ) : (
        <CreateEvent onClick={() => setScreen("event")} />
      )}
    </AdminLayout>
  );
});

export default Events;
