import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CustomerLayout from "../../layouts/CustomerLayout";
import { observer } from "mobx-react-lite";
import { useEventPresenter } from "../admin/event/presenter";
import { DownloadPhoto, Downloadphoto } from "../../util/DownloadPhoto";
import { Info, StyledEventSummary } from "../../components/EventSummary";
import Button from "../../components/Button";
import RsvpForm from "../../components/Forms/RsvpForm";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Rsvp = observer(() => {
  let params = useParams();

  let eventId = params.event;
  const { gridEvents } = useEventPresenter;

  const [url, setUrl] = useState("");
  useEffect(() => {
    gridEvents.length > 0 &&
      DownloadPhoto(gridEvents[eventId]?.thumbnail).then((response) => {
        setUrl(response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Div>
        <Cover background={url}>
          <Info>
            <h1>{gridEvents[eventId]?.name}</h1>
            <EventType>{gridEvents[eventId]?.event_types?.type}</EventType>
          </Info>
        </Cover>
        <div style={{ width: "76%" }}>
          <h1>RSVP Tickets</h1>
          <RsvpForm />
        </div>
        <div
          style={{
            width: "100%",
            marginTop: "10%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "40%",
              margin: "auto",
              justifyContent: "space-between",
            }}
          >
            <Link to={"/"}>
              <Button
                width={"100px"}
                color="var(--grey)"
                hover="var(--grey)"
                onClick={() => {
                  console.log("back");
                }}
              >
                <u>Back</u>
              </Button>
            </Link>

            <Button
              width={"100px"}
              color="var(--grey)"
              background="var(D4C0DE)"
              hover="var(--grey)"
              onClick={() => alert("continue")}
              //                    setStep((prev) => (prev < 4 ? prev + 1 : 4));
            >
              Continue
            </Button>
          </div>
        </div>
      </Div>
    </div>
  );
});

export default Rsvp;

export const Cover = styled(StyledEventSummary)`
  position: relative;
  margin-top: 2%;
  width: 76%;
  height: 220px;
  border-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  z-index: 0;
  div h1 {
    margin-left: 0;
    font-weight: bold;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 0%;
  margin: 0% 8%;
  margin-bottom: 10%;
  h1 {
    align-self: start;
    margin-left: 0%;
  }
  border: solid 0px;
`;
export const EventType = styled.span`
  background: var(--orange);
  color: white;
  border-top-right-radius: 6px;
  width: 100px;
  padding: 10px;
  height: 20px;
  text-align: center;
  margin-top: -40px;
`;
