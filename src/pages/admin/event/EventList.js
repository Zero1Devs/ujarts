import React from "react";
import Title from "../../../components/Title";
import SearchInput from "../../../components/SearchInput";
import EventListComp from "../../../components/EventListComp";

const EventList = () => {
  return (
    <>
      <Title>Event List</Title>
      <SearchInput
        width="300px"
        type="search"
        name="search"
        placeholder="Search Here"
        onChange={(e) => console.log(e.target.value)}
      />
      <EventListComp />
    </>
  );
};
export default EventList;
