import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useEventPresenter } from "../admin/event/presenter";
import { DownloadPhoto } from "../../util/DownloadPhoto";
import { Info, StyledEventSummary } from "../../components/EventSummary";
import Button from "../../components/Button";
//import RsvpForm from "../../components/Forms/RsvpForm";
import styled from "styled-components";
import { Link } from "react-router-dom";
import image from "../../assets/image.svg";
import CustomerLayout from "../../layouts/CustomerLayout";
import { useBookingPresenter } from "./presenter";
import { Radio } from "./Checkout";

const Rsvp = observer(() => {
  const [checked, setChecked] = useState("");
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
            <label>Your name</label>
            <Input
              type="text"
              id="name"
              name="name"
              className="textInput"
              onChange={console.log("change name")}
            />
            <label>Your email Address</label>
            <Input
              type="text"
              id="name"
              name="email"
              className="textInput"
              onChange={(e) => console.log(e.target.value)}
            />
            <label>Confirm email Address</label>
            <Input
              type="text"
              id="name"
              name="confirm_email"
              className="textInput"
              onChange={(e) => console.log(e.target.value)}
            />
            <label>Your Telephone Number</label>
            <Input
              type="text"
              id="name"
              name="Telnumber"
              className="textInput"
              onChange={(e) => console.log(e.target.value)}
            />
            <label>Communication Method</label>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <Radio>
                <label htmlFor="sms">SMS</label>
                <input
                  id="sms"
                  name="communication_method"
                  value={"sms"}
                  checked={checked === "sms"}
                  onChange={(e) => {
                    setFormValue(e);
                    setChecked(e.target.value);
                    console.log(e.target.name);
                  }}
                  type={"radio"}
                />
              </Radio>
              <Radio>
                <label htmlFor="email"> Email</label>
                <input
                  id="email"
                  name="communication_method"
                  value={"email"}
                  checked={checked === "email"}
                  onChange={(e) => {
                    setFormValue(e);
                    setChecked(e.target.value);
                    console.log(e.target.name);
                  }}
                  type={"radio"}
                />
              </Radio>
            </div>
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
                color="var(--grey)"
                background="var(D4C0DE)"
                hover="var(--grey)"
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
