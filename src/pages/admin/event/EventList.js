import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import Title from "../../../components/Title";
import {
  StyledToggle as Toggle,
  Option as StyledOption,
} from "../../../components/Toggle";
import styled from "styled-components";
import AllEvents from "./AllEvents";
const EventList = observer(() => {
  const [screen, setScreen] = useState("all");

  return (
    <>
      <Title>Event List</Title>
      <Toggle
        OnClick={(e) => setScreen(e)}
        width="300px"
        options={["All", "Running", "Upcoming"]}
      >
        <Option
          borderColor={screen === "all" ? "var(--darkpurple)" : "none"}
          onClick={() => setScreen("all")}
        >
          All
        </Option>
        <Option
          borderColor={screen === "running" ? "var(--darkpurple)" : "none"}
          onClick={() => setScreen("running")}
        >
          Running
        </Option>
        <Option
          borderColor={screen === "upcoming" ? "var(--darkpurple)" : "none"}
          onClick={() => setScreen("upcoming")}
        >
          Upcoming
        </Option>
      </Toggle>

      {screen === "all" ? (
        <AllEvents />
      ) : screen === "running" ? (
        <h2>Running</h2>
      ) : screen === "upcoming" ? (
        <h2>Upcoming</h2>
      ) : (
        <></>
      )}
    </>
  );
});
export default EventList;

const Option = styled(StyledOption)`
  background: white;
  border-radius: 0;
  border-bottom: solid 2px ${({ borderColor }) => borderColor};
`;
