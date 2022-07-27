import React from "react";
import styled from "styled-components";
import { HiUsers, HiOutlineTicket, HiPlusSm } from "react-icons/hi";
import Button from "./Button";

const EventListComp = () => {
  return (
    <EventCard>
      <TitleElement>
        <>active?</>
        <>activity number</>
        <h3>Futures and Beyond :: Creativity and 4IR Conference 2022</h3>
        <>date and time</>
      </TitleElement>
      <StatusElement>
        <>Event Status</>
        <h3>* In Progress</h3>
        <>Event Duration</>
        <h3>x hours</h3>
      </StatusElement>
      <AttendeesElement>
        <span>
          Number of attendeees <HiUsers color="var(--purple)" size={20} />
        </span>

        <div>50</div>
      </AttendeesElement>
      <TicketSoldEl>
        <span>
          Tickets Sold <HiOutlineTicket color="var(--orange)" size={20} />
        </span>
        <div>34</div>
      </TicketSoldEl>
      <TicketRemainEl>
        <span>
          Tickets Remaining <HiOutlineTicket color="#8B8B8B" size={20} />
        </span>
        <div>16</div>
      </TicketRemainEl>
      <Button
        color="var(--darkpurple)"
        border="1px solid var(--darkpurple)"
        hover="var(--purple)"
        width="200px"
      >
        <HiPlusSm color="#8B8B8B" size={20} /> Make anouncement
      </Button>
    </EventCard>
  );
};

export default EventListComp;

const EventCard = styled.div`
  margin-top: 35px;
  background: #f0f0f0;
  width: 100%;
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TitleElement = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 10px 0 0 10px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://i.pinimg.com/originals/3e/fd/02/3efd028ca6555fba34853a1629fba535.jpg");
  background-size: cover;
  padding: 15px;
`;

const StatusElement = styled.div`
  background: var(--purple);
  width: 200px;
  margin: 10px;
  margin-left: 50px;
  padding: 10px;
  border-radius: 10px;
`;

const AttendeesElement = styled.div`
  border-radius: 10px;
  background: white;
  color: black;
  padding: 20px;
  margin: 10px;
`;
const TicketSoldEl = styled.div`
  border-radius: 10px;
  background: white;
  color: black;
  padding: 20px;
  margin: 10px;
`;
const TicketRemainEl = styled.div`
  border-radius: 10px;
  background: white;
  color: black;
  padding: 20px;
  margin: 10px;
`;
