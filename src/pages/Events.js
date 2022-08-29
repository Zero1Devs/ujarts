import React, { useEffect } from "react";
import "../styles/index.css";
import "../styles/customerLayout.css";
import Event from "../components/Event";
import CustomerLayout from "../layouts/CustomerLayout";
import { observer } from "mobx-react";
//import event from "./data";
import styled from "styled-components";
import Title from "../components/Title";
import { useLocation } from "react-router-dom";
import { NavigationStore } from "../stores/navigationStore";
import { useEventPresenter } from "./admin/event/presenter";
const Events = observer(() => {
  let location = useLocation();
  const navigation = NavigationStore;
  const { event,events } = useEventPresenter;
  useEffect(() => {
    const hash = location.hash.split("&");
    if (hash[4] === "type=recovery")
      navigation.replace("/admin/reset-password");
    else if (hash[4] === "type=signup") navigation.replace("/admin/login");

    // eslint-disable-next-line
  }, []);

  return (
    <CustomerLayout>
      <div className="container">
        <Title border center marginLeft="30px">
          What's On?
        </Title>

        <Div>
          <label>Filter by:</label>
          <select name="" id="select">
            <option disabled selected>
              Event Type
            </option>
            <option value={""}>All</option>
            <option value={""}>Comedy</option>
            <option value={""}>Dance</option>
            <option value={""}>Events</option>
            <option value={""}>Exhibitions</option>
            <option value={""}>Music</option>
            <option value={""}>Theatre</option>
          </select>
        </Div>

        <EventList className="eventList">
          {events.map((data, id) => (
            <Event key={id} id={id} event={data} />
          ))}
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
  padding-left: 25px;
  
`;

export const Div = styled.div`
  align-self: center;
`;
