import React from "react";
import EventRow from "../../../components/EventRow";
import SearchInput from "../../../components/SearchInput";
import { useEventPresenter } from "./presenter";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
const RunningEvents = observer(() => {
  const { runningEvents,getRunningEvents } = useEventPresenter;
useEffect(()=>{
  getRunningEvents();
},[])
  return (
    <div>
      <SearchInput
        width="300px"
        type="search"
        name="search"
        placeholder="Search Here"
        onChange={(e) => console.log(e.target.value)}
      />
      {runningEvents.map((event, id) => (
        <EventRow key={id} event={event} />
      ))}
    </div>
  );
});

export default RunningEvents;
