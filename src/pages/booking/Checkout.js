import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { useBookingPresenter } from "./presenter";

const Checkout = observer(() => {
  const [checked, setChecked] = useState("");
  const { setFormValue } = useBookingPresenter;
  return (
    <div>
      <h3>Select your payment methods</h3>

      <Radio>
        <label htmlFor="card">Credit/Debit card</label>
        <input
          id="card"
          name="payment_type"
          value={"card"}
          checked={checked === "card"}
          onChange={(e) => {
            setFormValue(e);
            setChecked(e.target.value);
            console.log(e.target.name);
          }}
          type={"radio"}
        />
      </Radio>
    </div>
  );
});
//{checked === "card" && <PaymentButton />}
export default Checkout;
const Radio = styled.div`
  height: 40px;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0px 10px;
  margin: 10px 0px;
  border-radius: 5px;
  background: var(--lightgrey);
`;
/*
 <Radio>
        <label htmlFor="snap">SnapScan</label>
        <input
          id="snap"
          name="payment_type"
          value={"snap"}
          checked={checked === "snap"}
          onChange={(e) => {
            setChecked(e.target.value);
            setFormValue(e);
            console.log(e.target.name);
          }}
          type={"radio"}
        />
      </Radio>*/
