import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { NavigationStore } from "../../stores/navigationStore";
import Button from "../../components/Button";
import styled from "styled-components";
import { BsFillCreditCardFill } from "react-icons/bs";
const Checkout = observer(() => {
  const [checked, setChecked] = useState("");
  return (
    <div>
      <h3>Select your payment methods</h3>
      <Radio onClick={() => setChecked("snap")}>
        <span for="snap">SnapScan</span>
        <input
          name="snap"
          value={"snap"}
          checked={checked === "snap"}
          onChange={(e) => {
            setChecked(e.target.value);
            console.log(e.target.name);
          }}
          type={"radio"}
        />
      </Radio>
      <Radio onClick={() => setChecked("card")}>
        <span>Credit/Debit card</span>
        <input
          name="card"
          value={"card"}
          checked={checked === "card"}
          onChange={(e) => {
            setChecked(e.target.value);
            console.log(e.target.name);
          }}
          type={"radio"}
        />
      </Radio>
      {checked === "card" && <PaymentButton />}
    </div>
  );
});
export default Checkout;
const Radio = styled.div`
  height: 40px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0px 10px;
  margin: 10px 0px;
  border-radius: 5px;
  background: var(--lightgrey);
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
