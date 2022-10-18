import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useEventPresenter } from "../admin/event/presenter";
import { DownloadPhoto } from "../../util/DownloadPhoto";
import { Info, StyledEventSummary } from "../../components/EventSummary";
import Button from "../../components/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import image from "../../assets/image.svg";
import CustomerLayout from "../../layouts/CustomerLayout";
import { useBookingPresenter } from "./presenter";
import Input from "../../components/Input";

const Rsvp = observer(() => {
  let params = useParams();
  let eventId = params.event;
  const { gridEvents } = useEventPresenter;
  const { setFormValue } = useBookingPresenter;
  const [url, setUrl] = useState(image);
  useEffect(() => {
    gridEvents.length > 0 &&
      DownloadPhoto(gridEvents[eventId]?.thumbnail).then((response) => {
        setUrl(response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CustomerLayout>
      <Div>
        <Cover background={url}>
          <Info>
            <h1>{gridEvents[eventId]?.name}</h1>
            <EventType>{gridEvents[eventId]?.event_types?.type}</EventType>
          </Info>
        </Cover>
        <div style={{ width: "76%" }}>
          <h1>RSVP Tickets</h1>

          <div
            style={{
              width: "40%",
              marginLeft: "10%",
              marginTop: "10%",
            }}
          >
            <h3>Provide Your details</h3>
            <label htmlFor="name">Your name</label>
            <Input
              type="text"
              id="name"
              name="name"
              className="textInput"
              onChange={(e) => setFormValue(e)}
            />
            <label htmlFor="email">Your email Address</label>
            <Input
              type="text"
              id="email"
              name="email"
              className="textInput"
              onChange={(e) => setFormValue(e)}
            />
            <label htmlFor="confirm_email">Confirm email Address</label>
            <Input
              type="text"
              id="confirm_email"
              name="confirm_email"
              className="textInput"
              onChange={(e) => setFormValue(e)}
            />
            <label htmlFor="phone_number">Your Telephone Number</label>
            <Input
              type="tel"
              id="phone_number"
              name="phone_number"
              className="textInput"
              onChange={(e) => setFormValue(e)}
            />
          </div>
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
              <Button width={"100px"} color="var(--grey)" hover="var(--grey)">
                <u>Back</u>
              </Button>
            </Link>
            <Link to={"/"}>
              <Button
                width={"100px"}
                background="var(--orange)"
                hover="var(--darkorange)"
                onClick={() =>
                  alert(
                    "Thank you. We will let you know when tickets are available"
                  )
                }
              >
                Submit
              </Button>
            </Link>
          </div>
        </div>
      </Div>
    </CustomerLayout>
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
