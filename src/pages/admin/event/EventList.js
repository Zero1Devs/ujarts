import React from "react";
import Title from "../../../components/Title";
import SearchInput from "../../../components/SearchInput";

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
    </>
  );
};
export default EventList;
