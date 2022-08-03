import React from "react";
import EventRow from "../../../components/EventRow";

import SearchInput from "../../../components/SearchInput";
const AllEvents = () => {
  return (
    <div>
      <SearchInput
        width="300px"
        type="search"
        name="search"
        placeholder="Search Here"
        onChange={(e) => console.log(e.target.value)}
      />
      <EventRow />
    </div>
  );
};

export default AllEvents;
