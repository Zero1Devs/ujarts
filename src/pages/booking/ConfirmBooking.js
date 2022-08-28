import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import thumbnail from "../../assets/thumbnail.jpg";
import { FiCalendar, FiClock, FiMapPin, FiUsers } from "react-icons/fi";
import {
  EventCard as StyledEventCard,
  EventInfo,
  EventName,
  EventType,
  Thumbnail,
} from "../../components/Event";
import { useEventPresenter } from "../admin/event/presenter";
import { useBookingPresenter } from "./presenter";
const ConfirmBooking = observer(() => {
  const { event } = useEventPresenter;
  const { name, email, phonenumber, quantity, getCost } = useBookingPresenter;

  return (
    <div>
      <h3>Confirm your booking</h3>
      <BookingWrapper>
        <EventCard style={{ paddingTop: "20px" }}>
          <Thumbnail>
            <img alt="Event thumbnail" src={thumbnail} />
            <EventType>{event[0]?.type}</EventType>
          </Thumbnail>
          <EventInfo>
            <EventName style={{ fontSize: "18px" }} title="Event Name">
              {event[0]?.name}
            </EventName>

            <label title="Date">
              <FiCalendar size="23" color="var(--darkerpurple)" />
              <span>{event[0]?.dates}</span>
            </label>

            <label title="Venue">
              <FiMapPin size="23" color="var(--darkerpurple)" />
              <span>Kingsway Campus A1</span>
            </label>

            <label title="Presented by">
              <FiUsers size="23" color="var(--darkerpurple)" />
              <span>UJ Arts Gallery</span>
            </label>

            <label title="Duration">
              <FiClock size="23" color="var(--darkerpurple)" />
              <span>N/A</span>
            </label>
          </EventInfo>
        </EventCard>

        <TicketDetails>
          <h3>Ticket Detais</h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "grid", rowGap: "18px" }}>
              <Span>
                <Heading>Ticket Type</Heading>
                <SubHeading>Early Bird</SubHeading>
              </Span>
              <Span>
                <Heading>Date</Heading>
                <SubHeading>18 August 2022</SubHeading>
              </Span>
              <Span>
                <Heading>Place</Heading>
                <SubHeading>UJ Art Centre (APK)</SubHeading>
              </Span>
            </div>
            <div style={{ display: "grid", rowGap: "20px" }}>
              <Span>
                <Heading>Your Tickets</Heading>
                <SubHeading>{quantity}x Full Price Early Bird</SubHeading>
              </Span>
              <Span>
                <Heading>Time</Heading>
                <SubHeading>11:00 am</SubHeading>
              </Span>
              <Span>
                <Heading>Cost</Heading>
                <SubHeading>R {getCost().toFixed(2)}</SubHeading>
              </Span>
            </div>
          </div>
          <hr style={{ color: "red" }} />
          <h3>Ticket Detais</h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "grid", rowGap: "20px" }}>
              <Span>
                <Heading>Name:</Heading>
                <SubHeading>{name}</SubHeading>
              </Span>
              <Span>
                <Heading>Number:</Heading>
                <SubHeading>{phonenumber}</SubHeading>
              </Span>
            </div>
            <div>
              <Span>
                <Heading>Email Address</Heading>
                <SubHeading>{email}</SubHeading>
              </Span>
            </div>
          </div>
        </TicketDetails>
      </BookingWrapper>
    </div>
  );
});

export default ConfirmBooking;

const EventCard = styled(StyledEventCard)`
  flex: 1;
  margin: 0px;
  filter: none;
  background: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  :hover {
    animation: none;
  }
  div {
    filter: none;
  }
`;
const BookingWrapper = styled.div`
  width: 60vw;
  height: auto;
  background: white;
  border-radius: 10px;
  border: solid 0px;
  display: flex;
  filter: drop-shadow(2px 2px 4px var(--grey));
`;
const TicketDetails = styled.div`
  flex: 2;
  border: solid 0px blue;
  background: rgba(137, 122, 185, 0.5);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px 20px;
`;
const Heading = styled.label`
  color: white;
  font-size: 15px;
  margin-bottom: 5px;
`;
const SubHeading = styled.label`
  color: black;
  font-size: 18px;
`;
const Span = styled.span`
  display: grid;
`;
