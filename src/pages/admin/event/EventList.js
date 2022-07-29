import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import Title from "../../../components/Title";
import SearchInput from "../../../components/SearchInput";
import EventListComp from "../../../components/EventListComp";
import { StyledToggle as Toggle, Option } from "../../../components/Toggle";

const EventList = observer(() => {
  const [screen, setScreen] = useState("all");

  return (
    <>
      <Title>Event List</Title>
      <Toggle
        OnClick={(e) => setScreen(e)}
        width="300px"
        options={["all", "upcoming", "rest"]}
      >
        <Option
          background={screen === "all" ? "var(--darkpurple)" : "none"}
          color={screen === "all" ? "white" : "black"}
          onClick={() => setScreen("all")}
        >
          All
        </Option>
        <Option
          background={screen === "upcoming" ? "var(--darkpurple)" : "none"}
          color={screen === "upcoming" ? "white" : "black"}
          onClick={() => setScreen("upcoming")}
        >
          Upcoming
        </Option>
        <Option
          background={screen === "rest" ? "var(--darkpurple)" : "none"}
          color={screen === "rest" ? "white" : "black"}
          onClick={() => setScreen("rest")}
        >
          rest
        </Option>
      </Toggle>
      <SearchInput
        width="300px"
        type="search"
        name="search"
        placeholder="Search Here"
        onChange={(e) => console.log(e.target.value)}
      />
      {screen === "all" ? (
        <EventListComp />
      ) : screen === "Upcoming" ? (
        <h2>Upcoming</h2>
      ) : screen === "rest" ? (
        <h2>NEW</h2>
      ) : (
        <></>
      )}
    </>
  );
});
export default EventList;
