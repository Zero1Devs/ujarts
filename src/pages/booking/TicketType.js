import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useBookingPresenter } from "./presenter";
const TicketType = observer(({ id }) => {
  const { setFormValue, setQuantity, quantity, tickets } = useBookingPresenter;
  useEffect(
    () => console.log(tickets),
    // eslint-disable-next-line react-hooks/exhaustive-deps

    []
  );
  return (
    <div
      style={{
        border: "solid 0px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
      }}
    >
      <h3 style={{ textAlign: "left", alignSelf: "start" }}>Type of Ticket</h3>
      {/*tickets?.map((ticket, id) => (
        <Wrapper key={id}>
          <label>{ticket?.description}</label>
          <label>R {ticket?.price}</label>
          <div style={{ display: "flex" }}>
            <AiOutlineMinusCircle
              onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
              size="25"
              color="var(--orange)"
              style={{ cursor: "pointer" }}
            />
            <Counter>{quantity}</Counter>

            <AiOutlinePlusCircle
              onClick={() => setQuantity(quantity + 1)}
              size="25"
              color="var(--orange)"
              style={{ cursor: "pointer" }}
            />
          </div>
        </Wrapper>
      ))
      */}
      <Wrapper>
        <label>General Admission</label>
        <label>R 125,00</label>
        <div style={{ display: "flex" }}>
          <AiOutlineMinusCircle
            onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
            size="25"
            color="var(--orange)"
            style={{ cursor: "pointer" }}
          />
          <Counter>{quantity}</Counter>

          <AiOutlinePlusCircle
            onClick={() => setQuantity(quantity + 1)}
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
          color=" var(--darkpurple)"
          hover=" var(--darkerpurple)"
          border="solid 2px  var(--darkpurple)"
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
  width: 70%;
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
