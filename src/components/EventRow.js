import { React, useState, useEffect } from "react";
import styled from "styled-components";
import {
  HiUsers,
  HiDotsVertical,
  HiPlusSm,
  HiPencilAlt,
  HiTrash,
} from "react-icons/hi";
import { GiPlainCircle, GiTicket } from "react-icons/gi";
import Button from "./Button";
import { observer } from "mobx-react";
import { DownloadPhoto } from "../util/DownloadPhoto";

const EventRow = observer(({ event }) => {
  const [actions, setActions] = useState(false);
  const [url, setUrl] = useState("");
  useEffect(() => {
    DownloadPhoto(event?.thumbnail).then((response) => {
      setUrl(response);
      console.log(response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <EventCard
      onMouseLeave={() => {
        setActions(false);
      }}
    >
      <EventTitle background={url}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <span>
            <GiPlainCircle
              color={event?.state === "running" ? "#00c800" : "yellow"}
              size={10}
            />
          </span>
          <span>#{event?.id >= 10 ? "0" + event?.id : "00" + event?.id}</span>
        </div>
        <label style={{ fontSize: "18px" }}>
          {event?.name ||
            "Futures and Beyond :: Creativity and 4IR Conference 2022"}
        </label>
        <div style={{ marginTop: "20px" }}>
          <span style={{ marginRight: "15px" }}>5 Sept 2022</span>
          <span>12:00</span>
        </div>
      </EventTitle>
      <Status>
        <span>Event Status</span>
        <h3>
          <span style={{ marginRight: "5px" }}>
            <GiPlainCircle
              color={event?.state === "running" ? "#00c800" : "yellow"}
              size={10}
            />
          </span>
          {event?.state === "running" ? "Running" : "Upcoming"}
        </h3>
        <span>Event Duration</span>
        <h3>2 hrs</h3>
      </Status>
      <TagsWrapper>
        <TagsGroup>
          <Attendence>
            <Label>
              <span>Number of attendees</span>
              <HiUsers color="var(--purple)" size={20} />
            </Label>
            <label>{event?.sold}</label>
          </Attendence>
          <Attendence>
            <Label>
              <span>Tickets Sold</span>
              <div>
                <GiTicket color="var(--orange)" size={20} />
                <GiTicket
                  color="var(--orange)"
                  style={{ marginLeft: "-5px" }}
                  size={20}
                />
              </div>
            </Label>
            <label>{event?.sold}</label>
          </Attendence>
          <Attendence>
            <Label>
              <span>Tickets Remaining</span>
              <div>
                <GiTicket color="#8B8B8B" size={20} />
                <GiTicket
                  color="#8B8B8B"
                  style={{ marginLeft: "-5px" }}
                  size={20}
                />
              </div>
            </Label>
            <label>{event?.sold - 10}</label>
          </Attendence>
        </TagsGroup>
        <MakeAnnoncement>
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
        </MakeAnnoncement>
      </TagsWrapper>
      <ActionsButtonWrapper>
        <ActionsButton>
          <HiDotsVertical
            onClick={() => setActions(!actions)}
            color="var(--purple)"
            size={20}
          />
          {actions && (
            <ActionsMenu>
              <ActionButton
                onClick={() => {
                  alert("edit");
                }}
              >
                <HiPencilAlt color="white" size={20} />
                <span>Edit</span>
              </ActionButton>
              <ActionButton
                onClick={() => {
                  alert("delete");
                }}
              >
                <HiTrash color="white" size={20} />
                <span>Delete</span>
              </ActionButton>
            </ActionsMenu>
          )}
        </ActionsButton>
      </ActionsButtonWrapper>
    </EventCard>
  );
});

export default EventRow;

const EventCard = styled.div`
  margin-top: 35px;
  background: #f0f0f0;
  width: 100%;
  height: 220px;
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
`;

const EventTitle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 10px 0 0 10px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ background }) => background});
  background-size: cover;
  flex-grow: 0;
  padding: 10px;
`;
const Status = styled.div`
  background: var(--darkpurple);
  width: 180px;
  height: 70%;
  margin: 5px;
  margin-left: 20px;
  padding: 10px;
  border: solid 0px red;
  border-radius: 10px;
  align-self: center;
`;
const Attendence = styled.div`
  border-radius: 10px;
  background: white;
  color: black;
  margin: 0px 05px;
  width: 150px;
  padding: 20px 5px;
  font-size: 15px;
  border: solid 0px red;
  span {
    font-size: 12px;
  }
  h3 {
    margin-left: 20px;
  }
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  border: solid 0px;
  justify-content: space-evenly;
`;
const TagsGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 620px;
  border: solid 0px black;
`;
const TagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  height: 78%;
  align-items: center;
  width: auto;
  border: solid 0px black;
`;
const MakeAnnoncement = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;
const ActionsButton = styled.div`
  text-align: right;
  padding: 09px 0px;
  height: auto;
  border-radius: 10px;
  border: solid 0px black;
  cursor: pointer;
`;
const ActionsMenu = styled.div`
  padding: 10px;
  background: #3d3d3d;
  width: 100px;
  border-radius: 5px;
  float: right;
  margin-right: 10px;
  align-items: right;
  text-align: center;
  position: absolute;
  right: 20px;
  z-index: 1;
`;
const ActionButton = styled.div`
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: left;
  min-height: 25px;
  color: white;
  padding: 5px;
  margin: 5px auto;
  border-radius: 5px;
  background-color: #565656;
  border: none;
`;
const ActionsButtonWrapper = styled.div`
  align-self: flex-start;
  margin-left: 35px;
`;
