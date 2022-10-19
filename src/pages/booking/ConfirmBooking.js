import { observer } from "mobx-react-lite";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiClock, FiMapPin, FiUsers } from "react-icons/fi";
import {
  EventCard as StyledEventCard,
  EventInfo,
  EventName,
  EventType,
  Thumbnail,
} from "../../components/Event";
import { useEventPresenter } from "../admin/event/presenter";
import { useBookingPresenter } from "./presenter";
import { DownloadPhoto } from "../../util/DownloadPhoto";
import image from "../../assets/image.svg";
const ConfirmBooking = observer(({ id }) => {
  const { gridEvents } = useEventPresenter;
  const {
    name,
    surname,
    email,
    phone_number,
    quantity,
    date,
    time,
    getCost,
    setEventPlace,
    promo,
  } = useBookingPresenter;

  const [url, setUrl] = useState(image);

  useEffect(() => {
    setEventPlace(gridEvents[id]);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    DownloadPhoto(gridEvents[id]?.thumbnail).then((response) => {
      setUrl(response);
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div id="myhtml">
      <h3>Confirm your booking</h3>
      <BookingWrapper>
        <EventCard style={{ paddingTop: "20px" }}>
          <Thumbnail>
            <img alt="Event thumbnail" src={url} />
            <EventType>{gridEvents[id]?.event_types?.type}</EventType>
          </Thumbnail>
          <EventInfo>
            <EventName style={{ fontSize: "18px" }} title="Event Name">
              {gridEvents[id]?.name}
            </EventName>

            <label title="Venue">
              <FiMapPin size="23" color="var(--darkerpurple)" />
              <span>{gridEvents[id]?.venues?.name}</span>
            </label>

            <label title="Presented by">
              <FiUsers size="23" color="var(--darkerpurple)" />
              <span>{gridEvents[id]?.host}</span>
            </label>

            <label title="Duration">
              <FiClock size="23" color="var(--darkerpurple)" />
              <span>2h</span>
            </label>
          </EventInfo>
        </EventCard>

        <TicketDetails>
          <h3>Ticket Details</h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "grid", rowGap: "18px" }}>
              <Span>
                <Heading>Ticket Type</Heading>
                <SubHeading>General Admission</SubHeading>
              </Span>
              <Span>
                <Heading>Date</Heading>
                <SubHeading>{date} 2022</SubHeading>
              </Span>
              <Span>
                <Heading>Place</Heading>
                <SubHeading>UJ Art Centre (APK)</SubHeading>
              </Span>
            </div>
            <div style={{ display: "grid", rowGap: "20px" }}>
              <Span>
                <Heading>Your Tickets</Heading>
                <SubHeading>{quantity}x</SubHeading>
              </Span>
              <Span>
                <Heading>Time</Heading>
                <SubHeading>{time}</SubHeading>
              </Span>
              <Span>
                <Heading>Cost</Heading>
                <SubHeading>
                  R {promo[0] ? getCost() * promo[0]?.discount : getCost()}
                </SubHeading>
              </Span>
            </div>
          </div>
          <hr style={{ color: "red" }} />
          <h3>Your Details</h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "grid", rowGap: "20px" }}>
              <Span>
                <Heading>Name:</Heading>
                <SubHeading>
                  {name} {surname}
                </SubHeading>
              </Span>
              <Span>
                <Heading>Number:</Heading>
                <SubHeading>{phone_number}</SubHeading>
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
  flex-wrap: wrap;
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
