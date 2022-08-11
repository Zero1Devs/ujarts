import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import Button from "../components/Button";
import { NavigationStore } from "../stores/navigationStore";
export default function App(props) {
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
    <div className="App">
      <Button
        background="var(--darkpurple)"
        width={"97%"}
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
    </div>
  );
}
