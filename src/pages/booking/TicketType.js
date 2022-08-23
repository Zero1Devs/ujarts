import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
const TicketType = observer(() => {
  const [number, setNumber] = useState(0);
  return (
    <div
      style={{
        border: "solid 0px",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
      }}
    >
      <h3 style={{ textAlign: "left", alignSelf: "start" }}>Type of Ticket</h3>
      <Wrapper>
        <label>Early Bird</label>
        <label>R 125,00</label>
        <div style={{ display: "flex" }}>
          <AiOutlineMinusCircle
            onClick={() => setNumber((prev) => (prev > 0 ? prev - 1 : 0))}
            size="25"
            color="var(--orange)"
            style={{ cursor: "pointer" }}
          />
          <Counter>{number}</Counter>

          <AiOutlinePlusCircle
            onClick={() => setNumber((prev) => prev + 1)}
            size="25"
            color="var(--orange)"
            style={{ cursor: "pointer" }}
          />
        </div>
      </Wrapper>
      <DiscountWrapper>
        <Input width="200px" placeholder="Discount Code" />
        <Button
          width="50%"
          height="49px"
          color="var(--grey)"
          hover="var(--grey)"
          border="solid 2px var(--grey)"
        >
          Apply
        </Button>
      </DiscountWrapper>
    </div>
  );
});
export default TicketType;

const Wrapper = styled.div`
  border-bottom: solid 1px var(--grey);
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding: 5px 0px;
  margin: 30px 0px;
`;
const Counter = styled.span`
  margin: 0px 10px;
  border: solid 0px;
  width: 20px;
  text-align: center;
`;
const DiscountWrapper = styled.div`
  display: flex;
  place-items: center;
  column-gap: 15px;
`;
