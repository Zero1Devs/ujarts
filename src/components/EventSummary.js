import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { UiStore } from "../stores/uiStore";
import { observer } from "mobx-react";
import styled from "styled-components";
import thumbnail from "../assets/thumbnail.jpg";
import { useEventPresenter } from "../pages/admin/event/presenter";
const EventSummary = observer(({ id }) => {
  const { setFormValue } = UiStore;
  const { event, events, setActive } = useEventPresenter;

  return (
    <SummaryWrapper display={events[id]?.active}>
      <ActiveEvent />
      <StyledEventSummary background={thumbnail}>
        <Info>
          <h1>{events[id]?.name}</h1>
          <span className="eventType">{events[id]?.event_types.type}</span>
          <span> - 2h</span>
          <p>
            {events[id]?.description}
            <br />
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
            <Link to={"/booking/" + events[id]?.id}>
              <Button
                background="var(--orange)"
                width={"100px"}
                hover="var(--darkorange)"
              >
                {events[id]?.state === "upcoming" ? "RSPV NOW" : "BOOK NOW"}
              </Button>
            </Link>

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
const SummaryWrapper = styled.div`
  display: ${({ display }) => (display ? "block" : "none")};
  }
`;

//url('../assets/thumbnail.jpg')
export const StyledEventSummary = styled.div`
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
