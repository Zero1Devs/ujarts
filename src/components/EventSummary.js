import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { UiStore } from "../stores/uiStore";
import { observer } from "mobx-react";
import styled from "styled-components";
import thumbnail from "../assets/thumbnail.jpg";
const EventSummary = observer(({ id }) => {
  const { setFormValue, event } = UiStore;

  return (
    <SummaryWrapper display={event[id]?.summary}>
      <ActiveEvent />
      <StyledEventSummary background={thumbnail}>
        <Info>
          <h1>Urban Soundscapes - Crafting Spaces of Belonging</h1>
          <span className="eventType">Exhibition</span>
          <span> - EVENT - </span>
          <span>2h</span>
          <p>
            UJ Arts & Culture is proud to present Urban Soundscapes - Crafting
            Spaces of Belonging, a Pat Mautloa solo exhibition curated by UJ Art
            Gallery curator, Thabo Seshoka.
            <br />
            More info to follow soon.
          </p>
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
            <Link to={"/booking/" + id}>
              <Button
                background="var(--orange)"
                width={"100px"}
                hover="var(--darkorange)"
              >
                RSPV NOW
              </Button>
            </Link>
            <Button
              width={"100px"}
              color="var(--orange)"
              onClick={() => {
                setFormValue(id);
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
const Info = styled.div`
  z-index: 2;
  position: relative;
`;
const SummaryWrapper = styled.div`
  display: ${({ display }) => (display ? "block" : "none")};
`;

//url('../assets/thumbnail.jpg')
const StyledEventSummary = styled.div`
  background-color: white;
  border: solid 0px;
  height: 400px;
  position: absolute;
  z-index: 1;
  width: 86%;
  left: 0;
  border-radius: 20px;
  margin: 0px 33px;
  overflow: hidden;
  background-image: ${({ background }) => background};
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
