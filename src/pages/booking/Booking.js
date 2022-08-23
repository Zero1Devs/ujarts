import React, { useState } from "react";
import CustomerLayout from "../../layouts/CustomerLayout";
import "../../styles/index";
import thumbnail from "../../assets/thumbnail.jpg";
import Button from "../../components/Button";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { StyledEventSummary } from "../../components/EventSummary";
import BookingForm from "./BookingForm";
import TicketType from "./TicketType";
import { observer } from "mobx-react-lite";
import { BsCheck } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import ConfirmBooking from "./ConfirmBooking";
import Checkout from "./Checkout";

const Booking = observer(() => {
  let params = useParams();
  const [step, setStep] = useState(1);
  const Switch = () => {
    switch (step) {
      case 1:
        return <h1>DATE</h1>;
      case 2:
        return <TicketType />;
      case 3:
        return <BookingForm />;
      case 4:
        return <ConfirmBooking />;
      case 5:
        return <Checkout />;
      default:
        return;
    }
  };
  return (
    <CustomerLayout>
      <Div>
        <Cover background={thumbnail} />
        <h1>BOOK TICKETS for - Event#{params.event}</h1>
        <BookingProcess>
          <nav></nav>
          <StepWrapper>
            <Step
              onClick={() => setStep(1)}
              color={step === 1 ? "var(--orange)" : "var(--orange)"}
            >
              <StepCircle
                background={step === 1 ? "white" : "var(--orange)"}
                borderColor={"var(--orange)"}
                color={step === 1 && "var(--orange)"}
              >
                {step === 1 ? (
                  "1"
                ) : (
                  <BsCheck
                    size="23"
                    color="white"
                    style={{ fontWeight: "bold" }}
                  />
                )}
              </StepCircle>
              <label>Date & Time</label>
            </Step>
            <Step
              onClick={() => setStep(2)}
              color={step === 2 ? "var(--orange)" : "var(--orange)"}
            >
              <StepCircle
                background={
                  step === 2 ? "white" : step > 2 ? "var(--orange)" : ""
                }
                borderColor={step >= 2 && "var(--orange)"}
                color={step === 2 && "var(--orange)"}
              >
                {step <= 2 ? (
                  "2"
                ) : (
                  <BsCheck
                    size="23"
                    color="white"
                    style={{ fontWeight: "bold" }}
                  />
                )}
              </StepCircle>
              <label>Ticket Type</label>
            </Step>
            <Step
              onClick={() => setStep(3)}
              color={step >= 3 && "var(--orange)"}
            >
              <StepCircle
                background={
                  step === 3 ? "white" : step > 3 ? "var(--orange)" : ""
                }
                borderColor={step >= 3 && "var(--orange)"}
                color={step === 3 && "var(--orange)"}
              >
                {step <= 3 ? (
                  "3"
                ) : (
                  <BsCheck
                    size="23"
                    color="white"
                    style={{ fontWeight: "bold" }}
                  />
                )}
              </StepCircle>
              <label>Your details</label>
            </Step>
            <Step
              onClick={() => setStep(4)}
              color={step >= 4 && "var(--orange)"}
            >
              <StepCircle
                background={
                  step === 4 ? "white" : step > 4 ? "var(--orange)" : ""
                }
                borderColor={step >= 4 && "var(--orange)"}
                color={step === 4 && "var(--orange)"}
              >
                {step <= 4 ? (
                  "4"
                ) : (
                  <BsCheck
                    size="23"
                    color="white"
                    style={{ fontWeight: "bold" }}
                  />
                )}
              </StepCircle>
              <label>Confirm booking</label>
            </Step>
            <Step
              onClick={() => setStep(5)}
              color={step === 5 && "var(--orange)"}
            >
              <StepCircle
                background={step === 5 && "white"}
                borderColor={step === 5 && "var(--orange)"}
                color={step === 5 && "var(--orange)"}
              >
                {step <= 5 ? (
                  "5"
                ) : (
                  <BsCheck
                    size="23"
                    color="white"
                    style={{ fontWeight: "bold" }}
                  />
                )}
              </StepCircle>
              <label>Checkout</label>
            </Step>
          </StepWrapper>
        </BookingProcess>
        {Switch()}
        <div
          style={{
            width: "40%",
            marginTop: "5%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            width="20%"
            color="var(--grey)"
            hover="var(--grey)"
            onClick={() => setStep((prev) => (prev > 1 ? prev - 1 : 1))}
          >
            <u>Back</u>
          </Button>
          <div style={{ display: "flex", width: "40%" }}>
            {step === 4 && (
              <Button
                width="100%"
                border="solid 2px var(--darkorange)"
                color="var(--orange)"
                background="white"
                hover="var(--darkorange)"
                onClick={() => setStep(1)}
              >
                Edit booking
              </Button>
            )}
            {step === 5 ? (
              <Button
                width={step === 4 ? "100%" : "50%"}
                background="var(--lightgrey)"
                hover="var(--darkorange)"
                color="black"
                onClick={() => setStep((prev) => (prev < 3 ? prev + 1 : 3))}
              >
                <FaLock
                  size="20"
                  color="black"
                  style={{ fontWeight: "bold" }}
                />
                Pay
              </Button>
            ) : (
              <Button
                width={step === 4 ? "100%" : "50%"}
                background="var(--orange)"
                hover="var(--darkorange)"
                onClick={() => setStep((prev) => (prev < 3 ? prev + 1 : 3))}
              >
                Continue
              </Button>
            )}
          </div>
        </div>
      </Div>
    </CustomerLayout>
  );
});
export default Booking;

const BookingProcess = styled.div`
  width: 90%;
  height: 50px;
  margin-top: 50px;
  padding: 10px;
  border: solid 0px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  nav {
    border: solid 1px var(--grey);
    width: 45%;
    border-radius: 10px;
    position: absolute;
  }
`;
const StepWrapper = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 30px;
  width: 51%;
  border: solid 0px blue;
  font-size: 12px;
`;
const Step = styled.div`
  color: ${({ color }) => color || "black"};
  display: grid;
  place-items: center;
  text-align: center;
  text-transform: uppercase;
`;
const StepCircle = styled.div`
  background: ${({ background }) => background || "var(--grey)"};
  color: ${({ color }) => color || "white"};
  border: solid 1px ${({ borderColor }) => borderColor || "var(--grey)"};
  filter: ${({ color }) =>
    color ? "drop-shadow(1px 1px 2px var(--darkorange))" : "none"};
  display: grid;
  place-items: center;
  text-align: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;
const Cover = styled(StyledEventSummary)`
  position: relative;
  margin-top: 2%;
  width: 76%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  z-index: 0;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 0%;
  h1 {
    align-self: start;
    margin-left: 5%;
  }
`;
