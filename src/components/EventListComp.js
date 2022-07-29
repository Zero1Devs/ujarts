import { React, useState } from "react";
import styled from "styled-components";
import {
  HiUsers,
  HiOutlineTicket,
  HiDotsVertical,
  HiPlusSm,
  HiPencilAlt,
  HiTrash,
} from "react-icons/hi";
import Button from "./Button";

const EventListComp = () => {
  const [Menu, setMenu] = useState(false);
  return (
    <EventCard
      onMouseLeave={() => {
        setMenu(false);
      }}
    >
      <MenuEl>
        <button
          onClick={() => {
            setMenu(!Menu);
            console.log(Menu);
          }}
          Style="padding: 10px; margin: 10px;border-radius: 10px; border: none"
        >
          <HiDotsVertical color="var(--purple)" size={20} />
        </button>
        {Menu && (
          <EventMenu>
            <button
              onClick={() => {
                alert("edit");
              }}
              Style="width: 90px; display: flex; align-items: center; justify-content: left;min-height: 25px;color: white; padding: 5px; margin:5px auto; border-radius: 5px; background-color: #565656;
              ; border: none"
            >
              <HiPencilAlt color="white" size={20} />
              <span>Edit</span>
            </button>
            <button
              onClick={() => {
                alert("delete");
              }}
              Style="width: 90px; min-height: 25px;display: flex; align-items: center; justify-content: left; color: white;padding: 5px; margin:auto;border-radius: 5px; background-color: #565656; border: none;"
            >
              <HiTrash color="white" size={20} />

              <span>Delete</span>
            </button>
          </EventMenu>
        )}
      </MenuEl>
      <TitleElement>
        <div Style="display:flex;justify-content: space-between">
          <span>*</span>
          <span>#008</span>
        </div>

        <h3>Futures and Beyond :: Creativity and 4IR Conference 2022</h3>
        <div Style="width:100%;  padding-top:20px;font-size: 15px; display: flex; justify-content: space-around">
          <span>22 Aug. 2022</span>
          <span>12:00</span>
        </div>
      </TitleElement>
      <StatusElement>
        <span Style="font-size: 12px">Event Status</span>
        <h3 Style="margin-left: 20px">- In Progress</h3>
        <span Style="font-size: 12px">Event Duration</span>
        <h3 Style="margin-left: 20px">9 hrs</h3>
      </StatusElement>
      <AttendenceEl>
        <div Style="display: flex;align-items: center; justify-content: space-between">
          Number of attendeees <HiUsers color="var(--purple)" size={20} />
        </div>

        <div Style="margin-left: 20px">42</div>
      </AttendenceEl>
      <AttendenceEl>
        <div Style="display: flex;align-items: center; justify-content: space-between">
          Tickets Sold <HiOutlineTicket color="var(--orange)" size={20} />
        </div>
        <div Style="margin-left: 20px">51</div>
      </AttendenceEl>
      <AttendenceEl>
        <div Style="display: flex; align-items: center;justify-content: space-between">
          <span>Tickets Remaining</span>
          <HiOutlineTicket color="#8B8B8B" size={20} />
        </div>
        <div Style="margin-left: 20px">3</div>
      </AttendenceEl>

      <div Style="grid-row:2/3; grid-column: 3/5; margin: 40px 10px;">
        <Button
          color="var(--darkpurple)"
          border="1px solid var(--darkpurple)"
          hover="var(--purple)"
          width="250px"
          onClick={() => {
            alert("make anouncement");
          }}
        >
          <HiPlusSm color="#8B8B8B" size={20} /> Make anouncement
        </Button>
      </div>
    </EventCard>
  );
};

export default EventListComp;

const EventCard = styled.div`
  margin-top: 35px;
  background: #f0f0f0;
  width: 100%;
  height: 250px;
  border-radius: 10px;
  color: white;
  display: grid;
  gap: 0 5px;
  grid-template-columns: auto auto auto auto auto 80px;
  grid-template-rows: 100px 100px;
`;
const TitleElement = styled.div`
  width: 250px;
  height: 210px;
  border-radius: 10px 0 0 10px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://arts.uj.ac.za/media/images/FUTURESandBEYOND_ONLINE-IMAGE_004.2e16d0ba.fill-420x300.png");
  background-size: cover;
  grid-column: 1 / 2;
  grid-row: 1 / -1;
  padding: 20px;
`;

const StatusElement = styled.div`
  background: var(--darkpurple);
  width: 200px;
  height: 100%;
  margin: 5px;
  margin-left: 20px;
  padding: 10px;
  border-radius: 10px;
  grid-column: 2 / 3;
  grid-row: 1 / -1;
`;

const AttendenceEl = styled.div`
  border-radius: 10px;
  background: white;
  color: black;
  margin: 10px;
  margin-top: 10px;
  min-width: 220px;
  padding: 20px;
  grid-row: 1 / 2;
`;
const MenuEl = styled.div`
  grid-column: 6/7;
  text-align: right;
  padding: 0 auto;
  max-height: 50px;
  border-radius: 10px;
  cursor: pointer;
  height: 90px;
`;
const EventMenu = styled.div`
  padding: 10px;
  background: #3d3d3d;
  width: 100px;
  border-radius: 5px;
  grid-column: 6/7;
  float: right;
  grid-row: 1;
  margin-right: 10px;
  align-items: right;
  text-align: center;
  position: absolute;
  right: 20px;
  z-index: 1;
`;
