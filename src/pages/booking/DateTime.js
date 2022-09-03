import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { NavigationStore } from "../../stores/navigationStore";
import Button from "../../components/Button";
import styled from "styled-components";
import { BsFillCreditCardFill } from "react-icons/bs";
import { useBookingPresenter } from "./presenter";

const DateTime = observer(() => {
  const [checked, setChecked] = useState(false);
  const { date, time, setFormValue, setDate } = useBookingPresenter;
  useEffect(()=>{setChecked(!checked)},[date])
  return (
    <div>
      <h3>Select your date & time</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <DatesWrapper>
          <Date htmlFor="date1" checked={date === "4 September"} >
            <Day htmlFor="date1">4</Day>
            <DayOfWeek htmlFor="date1">Sun</DayOfWeek>
            <input
              id="date1"
              checked={date === "4 September"}
              value="4 September"
              onChange={(e) => {
                setFormValue(e);
                setDate(e);
              }}
              name="date"
              type={"radio"}
            />
          </Date>
          <Date htmlFor="date2" checked={date === "5 September"}>
            <Day htmlFor="date2">5</Day>
            <DayOfWeek htmlFor="date2">Mon</DayOfWeek>
            <input
              id="date2"
              checked={date === "5 September"}
              value="5 September"
              onChange={(e) => {
                setFormValue(e);
                setDate(e);
              }}
              name="date"
              type={"radio"}
            />
          </Date>
          <Date htmlFor="date3" checked={date === "6 September"}>
            <Day htmlFor="date3">6</Day>
            <DayOfWeek htmlFor="date3">Tue</DayOfWeek>
            <input
              id="date3"
              checked={date === "6 September"}
              value="6 September"
              onChange={(e) => {
                setFormValue(e);
                setDate(e);
              }}
              name="date"
              type={"radio"}
            />
          </Date>
          <Date htmlFor="date4" checked={date === "7 September"}>
            <Day htmlFor="date4">7</Day>
            <DayOfWeek htmlFor="date4">Wed</DayOfWeek>
            <input
              id="date4"
              checked={date === "7 September"}
              value="7 September"
              onChange={(e) => {
                setFormValue(e);
                setDate(e);
              }}
              name="date"
              type={"radio"}
            />
          </Date>
          <Date htmlFor="date5" checked={date === "8 September"}>
            <Day htmlFor="date5">8</Day>
            <DayOfWeek htmlFor="date5">Thu</DayOfWeek>
            <input
              id="date5"
              checked={date === "8 September"}
              value="8 September"
              onChange={(e) => {
                setFormValue(e);
                setDate(e);
              }}
              name="date"
              type={"radio"}
            />
          </Date>
        </DatesWrapper>
        <TimesWrapper>
          <Time checked={time === "11:00"} htmlFor="11">
            11:00
            <input
              id="11"
              checked={time === "11:00"}
              value="11:00"
              onChange={(e) => setFormValue(e)}
              name="time"
              type={"radio"}
            />
          </Time>
          <Time checked={time === "13:30"} htmlFor="13">
            13:30
            <input
              id="13"
              checked={time === "13:30"}
              value="13:30"
              onChange={(e) => setFormValue(e)}
              name="time"
              type={"radio"}
            />
          </Time>
          <Time checked={time === "15:00"} htmlFor="15">
            15:00
            <input
              id="15"
              checked={time === "15:00"}
              value="15:00"
              onChange={(e) => setFormValue(e)}
              name="time"
              type={"radio"}
            />
          </Time>
          <Time checked={time === "17:30"} htmlFor="17">
            17:30
            <input
              id="17"
              checked={date === "17:30"}
              value="17:30"
              onChange={(e) => setFormValue(e)}
              name="time"
              type={"radio"}
            />
          </Time>
          <Time checked={time === "19:00"} htmlFor="19">
            19:00
            <input
              id="19"
              checked={time === "19:00"}
              value="19:00"
              onChange={(e) => setFormValue(e)}
              name="time"
              type={"radio"}
            />
          </Time>
        </TimesWrapper>
      </div>
    </div>
  );
});
export default DateTime;

const DatesWrapper = styled.div`
  border: solid 0px;
  display: flex;
  overflow: scroll-y;
  flex-wrap: wrap;
  width: 900px;
`;
const TimesWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  width: 900px;
  flex-wrap: wrap;
  border: solid 0px;
  row-gap: 20px;
`;
const Time = styled.label`
  width: 160px;
  height: 40px;
  margin: 0px 10px;
  border-radius: 10px;
  background: ${({ checked }) =>
    checked ? "var(--darkpurple)" : "var(--lightgrey)"};
  color: ${({ checked }) => (checked ? "white" : "black")};
  filter: drop-shadow(2px 2px 3px var(--grey));
  text-align: center;
  display: grid;
  place-items: center;
  cursor: pointer;
  font-size: 25px;
  input {
    visibility: hidden;
  }
`;
const Date = styled.label`
  width: 160px;
  height: 140px;
  margin: 0px 10px;
  border-radius: 10px;
  background: ${({ checked }) =>
    checked ? "var(--darkpurple)" : "var(--lightgrey)"};
  color: ${({ checked }) => (checked ? "white" : "black")};
  filter: drop-shadow(2px 2px 3px var(--grey));
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  input {
    visibility: hidden;
  }
`;
const Day = styled.label`
  cursor: pointer;
  font-size: 50px;
`;
const DayOfWeek = styled.label`
  cursor: pointer;
`;
