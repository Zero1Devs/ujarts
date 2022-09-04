import React from "react";
import EventRow from "../../../components/EventRow";
import SearchInput from "../../../components/SearchInput";
import { useEventPresenter } from "./presenter";
import { observer } from "mobx-react-lite";
const AllEvents = observer(() => {
  const { events } = useEventPresenter;

  return (
    <div>
      <SearchInput
        width="300px"
        type="search"
        name="search"
        placeholder="Search Here"
        onChange={(e) => console.log(e.target.value)}
      />
      {events.map((event, id) => (
        <EventRow key={id} event={event} />
      ))}
    </div>
  );
});

export default AllEvents;
