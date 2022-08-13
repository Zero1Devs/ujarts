import React from "react";
import CustomerLayout from "../../layouts/CustomerLayout";
import "../../styles/index";
import thumbnail from "../../assets/thumbnail.jpg";
import Button from "../../components/Button";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { NavigationStore } from "../../stores/navigationStore";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { StyledEventSummary } from "../../components/EventSummary";
import BookingForm from "./BookingForm";
const Booking = () => {
  let params = useParams();

  return (
    <CustomerLayout>
      <Div>
        <Cover background={thumbnail} />
        <h1>BOOK TICKETS for - Event#{params.event}</h1>
        <Paragraph>
          Terms & Conditions
          <ul>
            <li>
              UJ is a mandatory vaccination site and requires all visitors
              accessing campuses to be vaccinated.
            </li>
            <li>
              Please remember to bring proof of identification and your
              vaccination certificate for verification at the gate. Please
              arrive early to allow additional time for screening.
            </li>
          </ul>
        </Paragraph>
        <FormWrapper>
          <BookingForm />
        </FormWrapper>
      </Div>
    </CustomerLayout>
  );
};
export default Booking;
const BookingProcess = styled.div`
  span {
    border: solid 2px var(--grey);
  }
`;
const Img = styled.img`
  margin-top: 2%;
  width: 80%;
  height: 500px;
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
  padding-left: 10%;
  h1 {
    align-self: start;
    margin-left: 5%;
  }
`;
const Paragraph = styled.p`
  margin-left: 5%;
  width: 80%;
`;
const FormWrapper = styled.div`
  margin-left: 5%;
`;

const PaymentButton = (props) => {
  const config = {
    public_key: "FLWPUBK_TEST-dec0f79285aabb4f1ce728dcf3c05a93-X",
    tx_ref: Date.now(),
    amount: props.amount,
    currency: "NGN",
    redirect_url: "localhost:3000/ticket-confirmation",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: props.email,
      phonenumber: props.phonenumber,
      name: props.name,
    },
    customizations: {
      title: "UJ Arts",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  const navigation = NavigationStore;
  return (
    <Button
      background="var(--darkpurple)"
      width="97%"
      hover="var(--darkerpurple)"
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
      Proceed with Payment
    </Button>
  );
};
