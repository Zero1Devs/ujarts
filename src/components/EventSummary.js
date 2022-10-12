import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import styled from "styled-components";
import { DownloadPhoto } from "../util/DownloadPhoto";

import { useEventPresenter } from "../pages/admin/event/presenter";
const EventSummary = observer(({ id, event }) => {
  const { setActive } = useEventPresenter;
  const [url, setUrl] = useState("");
  useEffect(() => {
    DownloadPhoto(event?.thumbnail).then((response) => {
      setUrl(response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SummaryWrapper display={event?.active.toString()} id="summary">
      <ActiveEvent />
      <StyledEventSummary background={url}>
        <Info>
          <h1>{event?.name}</h1>
          <span className="eventType">{event?.event_types.type}</span>
          <span> - 2h</span>
          <Description>
            <p>
              {event?.description}
              <br />
            </p>
          </Description>
          <Div style={{ display: "flex" }}>
            <Link to={"/events/" + id}>
              <Button
                background="var(--darkpurple)"
                width={"100px"}
                hover="var(--darkerpurple)"
              >
                Full Details
              </Button>
            </Link>
            {event?.state === "upcoming" ? (
              <Link to={"/rsvp/" + id}>
                <Button
                  background="var(--orange)"
                  width={"100px"}
                  hover="var(--darkorange)"
                >
                  RSVP NOW
                </Button>
              </Link>
            ) : (
              <Link to={"/booking/" + id}>
                <Button
                  background="var(--orange)"
                  width={"100px"}
                  hover="var(--darkorange)"
                >
                  BOOK NOW
                </Button>
              </Link>
            )}

            <Button
              width={"100px"}
              color="var(--orange)"
              onClick={() => {
                setActive(id);
              }}
            >
              CANCEL
            </Button>
          </Div>
        </Info>
      </StyledEventSummary>
    </SummaryWrapper>
  );
});
export default EventSummary;

const ActiveEvent = styled.div`
  width: 361px;
  height: 5px;
  border-radius: 2px;
  background: var(--orange);
  filter: drop-shadow(2px 2px 8px var(--orange));
  margin-left: 29px;
  margin-bottom: 20px;
`;
export const Info = styled.div`
  z-index: 2;
  position: relative;
`;
const Description = styled.div`
  height: 46%;
  overflow: auto;
  margin: 5px 0px;
`;
const SummaryWrapper = styled.div`
  visibility: ${({ display }) => (display === "true" ? "visible" : "hidden")};
  width:86%;
  }
`;

//url('../assets/thumbnail.jpg')
export const StyledEventSummary = styled.div`
  background-color: white;
  border: solid 0px;
  display: flex;
  height: 400px;
  position: absolute;
  z-index: 1;
  width: 86%;
  left: 0;
  border-radius: 20px;
  margin: 0px 33px;
  overflow: hidden;
  background-image: url(${({ background }) => background});
  background-size: 100%;
  background-repeat: no-repeat;
  color: white;
  padding: 20px 50px;
  ::before {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    top: 0;

    background: linear-gradient(
        139deg,
        rgba(0, 0, 0, 0.596) 33%,
        rgba(0, 0, 0, 0.596) 59%
      )
      no-repeat;
  }
`;
const Div = styled.div`
  display: flex;
`;
