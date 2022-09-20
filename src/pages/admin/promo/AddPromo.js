import React, { useEffect } from "react";
import { observer } from "mobx-react";
import Title from "../../../components/Title";
import styled from "styled-components";
import Input, { StyledInput } from "../../../components/Input";
import Select from "../../../components/Select";
import Button from "../../../components/Button";
import percent from "../../../assets/percent.svg";
import { usePromoPresenter } from "./presenter";
const AddPromo = observer((props) => {
  const { setFormValue, createPromo, getEvents, events } = usePromoPresenter;
  useEffect(() => {
    getEvents();
  });
  return (
    <>
      <Title width="300px">New Promo Code</Title>

      <Div className="container">
        <InputGroup>
          <label>Promo Code</label>
          <Input
            width="200px"
            type="text"
            name="promo_code"
            onChange={(e) => setFormValue(e)}
          />
        </InputGroup>

        <InputGroup>
          <label>Discount</label>
          <PromoInput
            width="200px"
            type="text"
            name="discount"
            onChange={(e) => setFormValue(e)}
          />
        </InputGroup>
        <InputGroup>
          <label>Event</label>
          <Select
            width="210px"
            name="event"
            onChange={(e) => setFormValue(e)}
            options={events}
          />
        </InputGroup>
        <InputGroup width="250px" marginTop="50px">
          <Button
            width="100px"
            color="var(--orange)"
            hover="var(--darkorange)"
            border="solid 1px var(--darkorange)"
            onClick={(e) => props.onClick((e = false))}
          >
            Cancel
          </Button>
          <Button
            width="100px"
            background="var(--purple)"
            hover="var(--darkpurple)"
            border="solid 1px var(--darkpurple)"
            onClick={() => createPromo()}
          >
            Create
          </Button>
        </InputGroup>
      </Div>
    </>
  );
});

export default AddPromo;
const Div = styled.div`
  display: flex;
  align-items: center;
  height: 80%;
  border: none;
  justify-content: center;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  margin-top: ${({ marginTop }) => marginTop || "10px"};
  width: ${({ width }) => width || "320px"};
`;
const PromoInput = styled(StyledInput)`
  background: white url(${percent}) no-repeat scroll 98% 9px;

  :focus {
    outline: none !important;
    border: 2px solid var(--darkpurple);
  }
`;
