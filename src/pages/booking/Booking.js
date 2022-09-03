import React, { useState } from "react";
import CustomerLayout from "../../layouts/CustomerLayout";
import "../../styles/index";
import thumbnail from "../../assets/thumbnail.jpg";
import Button from "../../components/Button";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Info, StyledEventSummary } from "../../components/EventSummary";
import BookingForm from "./BookingForm";
import TicketType from "./TicketType";
import { observer } from "mobx-react-lite";
import { BsCheck } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import ConfirmBooking from "./ConfirmBooking";
import { EventType } from "../../components/Event";
import { useEventPresenter } from "../admin/event/presenter";
import Checkout from "./Checkout";
import { useBookingPresenter } from "./presenter";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { BsFillCreditCardFill } from "react-icons/bs";
import { NavigationStore } from "../../stores/navigationStore";
import DateTime from "./DateTime";

const Booking = observer(() => {
  let params = useParams();
  let eventId = params.event;
  const [step, setStep] = useState(1);
  /*const [screen, setScreen] = useState(1);*/
  const {
    screen,
    setScreen,
    GoBack,
    payment_type,
    name,
    surname,
    phone_number,
    email,
    getCost,
  } = useBookingPresenter;
  const { events } = useEventPresenter;

  const Switch = () => {
    switch (screen) {
      case 1:
        return <DateTime />;
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
  const SwitchPaymentButton = () => {
    if (screen === 5) {
      switch (payment_type) {
        case "card":
          return (
            <PaymentButton
              name={name + " " + surname}
              email={email}
              phone_number={phone_number}
              amount={getCost()}
            />
          );
        case "snap":
          return (
            <Button
              width={screen === 4 ? "100%" : "50%"}
              background="var(--lightgrey)"
              hover="var(--darkorange)"
              color="black"
              onClick={() => setStep((prev) => (prev < 3 ? prev + 1 : 3))}
            >
              <FaLock size="20" color="black" style={{ fontWeight: "bold" }} />
              Pay
            </Button>
          );
        default:
          return (
            <Button
              width={screen === 4 ? "100%" : "50%"}
              background="var(--lightgrey)"
              hover="var(--darkorange)"
              color="black"
              onClick={() => setStep((prev) => (prev < 3 ? prev + 1 : 3))}
            >
              <FaLock size="20" color="black" style={{ fontWeight: "bold" }} />
              Pay
            </Button>
          );
      }
    }
  };
  return (
    <CustomerLayout>
      <Div>
        <Cover background={thumbnail}>
          <Info>
            <h1>{events[eventId - 1]?.name}</h1>
            <EventType>{events[eventId - 1]?.event_types?.type}</EventType>
          </Info>
        </Cover>
        <div style={{ width: "76%" }}>
          <h1>BOOK TICKETS</h1>
          <BookingProcess>
            <nav></nav>
            <StepWrapper>
              <Step
                onClick={async () => {
                  await setScreen();
                }}
                color={screen === 1 ? "var(--orange)" : "var(--orange)"}
              >
                <StepCircle
                  background={screen === 1 ? "white" : "var(--orange)"}
                  borderColor={"var(--orange)"}
                  color={screen === 1 ? "var(--orange)" : undefined}
                >
                  {screen === 1 ? (
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
                onClick={async () => {
                  await setScreen();
                }}
                color={screen >= 2 ? "var(--orange)" : "black"}
              >
                <StepCircle
                  background={
                    screen === 2 ? "white" : screen > 2 ? "var(--orange)" : ""
                  }
                  borderColor={screen >= 2 ? "var(--orange)" : undefined}
                  color={screen === 2 ? "var(--orange)" : undefined}
                >
                  {screen <= 2 ? (
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
                onClick={async () => {
                  await setScreen(3);
                }}
                color={screen >= 3 ? "var(--orange)" : undefined}
              >
                <StepCircle
                  background={
                    screen === 3 ? "white" : screen > 3 ? "var(--orange)" : ""
                  }
                  borderColor={screen >= 3 ? "var(--orange)" : undefined}
                  color={screen === 3 ? "var(--orange)" : undefined}
                >
                  {screen <= 3 ? (
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
                color={screen >= 4 ? "var(--orange)" : undefined}
              >
                <StepCircle
                  background={
                    screen === 4 ? "white" : screen > 4 ? "var(--orange)" : ""
                  }
                  borderColor={screen >= 4 ? "var(--orange)" : undefined}
                  color={screen === 4 ? "var(--orange)" : undefined}
                >
                  {screen <= 4 ? (
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
                color={screen === 5 ? "var(--orange)" : undefined}
              >
                <StepCircle
                  background={screen === 5 ? "white" : undefined}
                  borderColor={screen === 5 ? "var(--orange)" : undefined}
                  color={screen === 5 ? "var(--orange)" : undefined}
                >
                  {screen <= 5 ? (
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
              width: "100%",
              marginTop: "15%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              width="20%"
              color="var(--grey)"
              hover="var(--grey)"
              onClick={() => {
                //alert();
                GoBack(screen - 1);
              }}
            >
              <u>Back</u>
            </Button>
            <div style={{ display: "flex", width: "40%" }}>
              {screen === 4 && (
                <Button
                  width="100%"
                  border="solid 2px var(--darkorange)"
                  color="var(--orange)"
                  background="white"
                  hover="var(--darkorange)"
                  onClick={() =>
                    //alert()
                    GoBack(1)
                  }
                >
                  Edit booking
                </Button>
              )}
              {screen === 5 ? (
                SwitchPaymentButton()
              ) : (
                //<h1>sqi</h1>
                <Button
                  width={screen === 4 ? "100%" : "50%"}
                  background="var(--orange)"
                  hover="var(--darkorange)"
                  onClick={async () => {
                    //                    setStep((prev) => (prev < 4 ? prev + 1 : 4));
                    await setScreen();
                  }}
                >
                  Continue
                </Button>
              )}
            </div>
          </div>
        </div>
      </Div>
    </CustomerLayout>
  );
});
export default Booking;

export const BookingProcess = styled.div`
  width: 90%;
  height: 50px;
  margin-top: 30px;
  margin-bottom: 10%;
  padding: 10px;
  border: solid 0px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  nav {
    border: solid 1px var(--grey);
    width: 60%;
    border-radius: 10px;
    position: absolute;
  }
`;
export const StepWrapper = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 30px;
  width: 70%;
  border: solid 0px blue;
  font-size: 12px;
`;
export const Step = styled.div`
  color: ${({ color }) => color || "black"};
  display: grid;
  place-items: center;
  text-align: center;
  text-transform: uppercase;
`;
export const StepCircle = styled.div`
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
  h1 {
    align-self: start;
    margin-left: 0%;
  }
  border: solid 0px;
`;

const PaymentButton = (props) => {
  const config = {
    public_key: "FLWPUBK_TEST-dec0f79285aabb4f1ce728dcf3c05a93-X",
    tx_ref: Date.now(),
    amount: props.amount,
    currency: "NGN",
    redirect_url: window.location.origin + "/ticket-confirmation",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: props.email,
      phonenumber: props.phone_number,
      name: props.name,
    },
    customizations: {
      title: "UJ Arts",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };
  const navigation = NavigationStore;
  const handleFlutterPayment = useFlutterwave(config);
  return (
    <Button
      background="var(--orange)"
      width="100%"
      hover="var(--darkorange)"
      onClick={() => {
        handleFlutterPayment({
          callback: (response) => {
            console.log(response);
            closePaymentModal(); // this will close the modal programmatically
          },
          onClose: () => navigation.push("ticket-confirmation"),
        });
      }}
    >
      <BsFillCreditCardFill size="20" color="white" />
      Pay with Credit/Debit card
    </Button>
  );
};
