import React, { useEffect, useState } from "react";
import "../styles/index.css";
import "../styles/customerLayout.css";
import Event from "../components/Event";
import CustomerLayout from "../layouts/CustomerLayout";
import { observer } from "mobx-react";
import styled from "styled-components";
import Title from "../components/Title";
import { useLocation } from "react-router-dom";
import { NavigationStore } from "../stores/navigationStore";
import { useEventPresenter } from "./admin/event/presenter";
import Select from "../components/Select";
const Events = observer(() => {
  let location = useLocation();
  const navigation = NavigationStore;
  const { gridEvents, setFilterValue, eventTypes } = useEventPresenter;

  useEffect(() => {
    const hash = location.hash.split("&");
    if (hash[4] === "type=recovery")
      navigation.replace("/admin/reset-password");
    else if (hash[4] === "type=signup") navigation.replace("/admin/login");

    // eslint-disable-next-line
  }, []);
  /* useEffect(() => {
    getEventTypes();

    // eslint-disable-next-line
  }, []);*/
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const Timer = () => {
      if (seconds > 0) setSeconds((prev) => prev - 1);
      else {
        clearInterval(timer);
      }
    };
    const timer = setInterval(() => Timer(), 1000);
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line
  }, [seconds]);
  return (
    <CustomerLayout>
      <div className="container">
        <Title border center marginLeft="30px">
          What's On?
        </Title>

        <Div>
          <label style={{ marginRight: "10px" }}>Filter by:</label>
          {seconds === 0 && (
            <Select
              name="evenType"
              onChange={(e) => setFilterValue(e)}
              defaultValue={0}
              options={[...eventTypes, { id: 0, name: "All" }]}
              width="50%"
            ></Select>
          )}
        </Div>

        <EventList className="eventList">
          {gridEvents.length > 0 ? (
            gridEvents?.map((data,id) => (
              <Event key={id} id={id} event={data} />
            ))
          ) : (
            <h1 style={{ textAlign: "center" }}>No events for now</h1>
          )}
        </EventList>
      </div>
    </CustomerLayout>
  );
});
export default Events;

export const EventList = styled.div`
  display: flex;
  align-items: center;
  border: solid 0px black;
  flex-wrap: wrap;
  padding-left: 3%;
`;

export const Div = styled.div`
  align-self: center;
  border: solid 0px black;
  width: 25%;
  text-align: center;

  @media only screen and (max-width: 600px) {
    /* For mobile phones: */
    width: 80%;
    align-self: start;
    border: solid 0px black;
    margin-left: 0px;
    font-size: 10px;
    text-align: left;
    padding-left: 10vw;
  }
`;
