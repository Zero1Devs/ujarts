import { observer } from "mobx-react-lite";
import React, { useState, useEffect } from "react";
import { useEventPresenter } from "../admin/event/presenter";
import { useBookingPresenter } from "./presenter";
import { useLocation } from "react-router-dom";
import QRCode from "react-qr-code";
import Button from "../../components/Button";
import emailjs from "@emailjs/browser";
import * as ReactDOMServer from "react-dom/server";
import Pdf from "react-to-pdf";
import { AiOutlineDownload } from "react-icons/ai";
import CustomerLayout from "../../layouts/CustomerLayout";
import { BsCheck } from "react-icons/bs";
import {
  BookingProcess,
  StepWrapper,
  StepCircle,
  Div,
  Step,
  Cover,
} from "./Booking";
import { Info } from "../../components/EventSummary";
import { EventType } from "../../components/Event";
import { NavigationStore } from "../../stores/navigationStore";
import { DownloadPhoto } from "../../util/DownloadPhoto";
const ref = React.createRef();
const TicketConfirmation = observer(() => {
  const {
    name,
    surname,
    email,
    event,
    eventType,
    time,
    place,
    date,
    getBooking,
  } = useBookingPresenter;
  const options = {
    orientation: "landscape",
    unit: "cm",
    format: [22, 11],
  };
  const navigation = NavigationStore;
  const [refNumber, setRefNumber] = useState("");
  let location = useLocation();
  const search = location.search.split("&");
  const [url, setUrl] = useState("");
  const { gridEvents } = useEventPresenter;
  useEffect(() => {
    getBooking();
    console.log(search);
    if (search[0] === "?status=successful") {
      console.log(search[1].split("=")[1]);
      setRefNumber(search[1].split("=")[1]);
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    DownloadPhoto(gridEvents[0]?.thumbnail).then((response) => {
      setUrl(response);
    });
    // eslint-disable-next-line
  }, [url]);
  return (
    <CustomerLayout>
      <Div>
        <Cover background={url}>
          <Info>
            <h1>{event}</h1>
            <EventType>{eventType}</EventType>
          </Info>
        </Cover>
        <BookingProcess>
          <nav></nav>
          <StepWrapper>
            <Step color={"var(--orange)"}>
              <StepCircle
                background={"var(--orange)"}
                borderColor={"var(--orange)"}
                color={undefined}
              >
                <BsCheck
                  size="23"
                  color="white"
                  style={{ fontWeight: "bold" }}
                />
              </StepCircle>
              <label>Date & Time</label>
            </Step>
            <Step color={"var(--orange)"}>
              <StepCircle
                background={"var(--orange)"}
                borderColor={"var(--orange)"}
                color={"var(--orange)"}
              >
                <BsCheck
                  size="23"
                  color="white"
                  style={{ fontWeight: "bold" }}
                />
              </StepCircle>
              <label>Ticket Type</label>
            </Step>
            <Step color={"var(--orange)"}>
              <StepCircle
                background={"var(--orange)"}
                borderColor={"var(--orange)"}
                color={"var(--orange)"}
              >
                <BsCheck
                  size="23"
                  color="white"
                  style={{ fontWeight: "bold" }}
                />
              </StepCircle>
              <label>Your details</label>
            </Step>
            <Step color={"var(--orange)"}>
              <StepCircle
                background={"var(--orange)"}
                borderColor={"var(--orange)"}
                color={"var(--orange)"}
              >
                <BsCheck
                  size="23"
                  color="white"
                  style={{ fontWeight: "bold" }}
                />
              </StepCircle>
              <label>Confirm booking</label>
            </Step>
            <Step color={"var(--orange)"}>
              <StepCircle
                background={"var(--orange)"}
                borderColor={"var(--orange)"}
                color={"var(--orange)"}
              >
                <BsCheck
                  size="23"
                  color="white"
                  style={{ fontWeight: "bold" }}
                />
              </StepCircle>
              <label>Checkout</label>
            </Step>
          </StepWrapper>
        </BookingProcess>
        <div style={{ display: "grid", placeItems: "center" }}>
          <h3>Your ticket</h3>
          <Ticket
            time={time}
            place={place}
            eventType={eventType}
            date={date}
            event={event}
            refNumber={refNumber}
            onClick={() => {
              emailjs
                .send(
                  "default_service",
                  "template_e1u78gk",
                  {
                    name: name,
                    email: email,
                    to_name: name + " " + surname,
                    from_name: "UJ Arts & Culture",
                    message: "Hello, how are you? Here is your ticket",
                    myhtml: ReactDOMServer.renderToStaticMarkup(
                      <Ticket
                        time={time}
                        place={place}
                        eventType={eventType}
                        date={date}
                        event={event}
                        refNumber={refNumber}
                      />
                    ),
                  },
                  "kH-h4rehfRqCVNXY-"
                )
                .then(
                  function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                  },
                  function (error) {
                    console.log("FAILED...", error);
                  }
                );
            }}
          />
          <div style={{ display: "flex", margin: "20px" }}>
            <Pdf targetRef={ref} filename="ticket.pdf" options={options}>
              {({ toPdf }) => (
                <Button
                  width="200px"
                  border="solid 2px var(--darkorange)"
                  color="var(--orange)"
                  background="white"
                  hover="var(--darkorange)"
                  onClick={toPdf}
                >
                  <AiOutlineDownload size="23" style={{ fontWeight: "bold" }} />
                  Download ticket
                </Button>
              )}
            </Pdf>
            <Button
              width={"200px"}
              background="var(--orange)"
              hover="var(--darkorange)"
              onClick={() => {
                //                    setStep((prev) => (prev < 4 ? prev + 1 : 4));
                sessionStorage.clear();
                navigation.push("/");
              }}
            >
              Done
            </Button>
          </div>
        </div>
      </Div>
    </CustomerLayout>
  );
});

export default TicketConfirmation;
/**asd
 * dasd
 * das
 dasd
 asdas
 dsd
 das
 dasdasdas
 */
const Ticket = observer((props) => {
  return (
    <div
      ref={ref}
      style={{
        width: "829px",
        height: "421px",
        display: "flex",
        border: "solid 0px",
        borderRadius: "16px",
        filter: "drop-shadow(2px 2px 4px var(--grey))",
        margin: "10px",
        background: "white",
      }}
    >
      <div
        style={{
          flex: 2,
          width: "543px",
          background: "white",
          borderRadius: "16px",
          borderTopRightRadius: "0px",
          borderBottomRightRadius: "0px",
          padding: "20px 40px",
          boxSizing: "border-box",
        }}
        onClick={props.onClick}
      >
        <label
          style={{
            width: "80px",
            height: "20px",
            borderRadius: " 8px",
            background: " #ff6515",
            color: "white",
            textAlign: "center",
            padding: "5px 10px",
            display: "grid",
            placeItems: "center",
            margin: "0px 0 20px 0px",
          }}
        >
          {props.eventType}
        </label>
        <label
          title="Event Name"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
            fontFamily: "Poppins",
            color: "#643E77",
            marginBottom: "30px",
          }}
        >
          {props.event}
        </label>
        <br />
        <label
          style={{
            display: "block",
            margin: "5px 0px 20px 0px",
            fontSize: "14px",
          }}
        >
          2h
        </label>
        <hr />
        <div
          className="details"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            border: "solid 0px",
            margin: "30px 20px 20px 20px",
          }}
        >
          <span style={{ display: "grid", textAlign: "center" }}>
            <label
              style={{
                color: "black",
                fontSize: "15px",
                marginBottom: "5px",
                fontWeight: "bold",
              }}
            >
              Tickets
            </label>
            <label style={{ color: "#643E77" }}>
              {props.quantity}x Early Bird
            </label>
          </span>
          <span style={{ display: "grid", textAlign: "center" }}>
            <label
              style={{
                color: "black",
                fontSize: "15px",
                marginBottom: "5px",
                fontWeight: "bold",
              }}
            >
              Date
            </label>
            <label style={{ color: "#643E77" }}>{props.date} 2022</label>
          </span>
          <span style={{ display: "grid", textAlign: "center" }}>
            <label
              style={{
                color: "black",
                fontSize: "15px",
                marginBottom: "5px",
                fontWeight: "bold",
              }}
            >
              Time
            </label>
            <label style={{ color: "#643E77" }}>
              {props.time}{" "}
              {parseInt(props.time.substring(0, 2)) > 12 ? "pm" : "am"}
            </label>
          </span>
        </div>
        <span
          style={{
            display: "grid",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <label
            style={{
              color: "black",
              fontSize: "15px",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Place
          </label>
          <label style={{ color: "#643E77" }}>{props.place}</label>
        </span>
      </div>
      <div
        style={{
          flex: 1,
          width: "286px",
          background: "rgba(137, 122, 185, 0.5)",
          borderRadius: "16px",
          borderTopLeftRadius: "0px",
          borderBottomLeftRadius: "0px",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div>
            <QRCode value={props.refNumber} size={180} />
          </div>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              color: "black",
              margin: "10px 0px 10px 0px",
            }}
          >
            Reference no.
          </label>
          <label style={{}}>{props.refNumber}</label>
        </div>
      </div>
    </div>
  );
});
