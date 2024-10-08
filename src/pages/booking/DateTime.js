import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useBookingPresenter } from "./presenter";
import styled from "styled-components";
import { useEventPresenter } from "../admin/event/presenter";
const DateTime = observer(({ id }) => {
  const [checked, setChecked] = useState("");
  const { date, time, setFormValue, setDate, getDates, dates, getTickets } =
    useBookingPresenter;
  const { gridEvents } = useEventPresenter;
  const [load, setLoad] = useState(true);
  useEffect(
    () => {
      getDates(gridEvents[id]?.id);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <div>
      <h3>Select your date & time</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <DatesWrapper>
          {dates?.map((dates, id) => (
            <div key={id} style={{ display: "grid", rowGap: "20px" }}>
              <Date
                htmlFor={"date" + id}
                checked={date === dates.date || time === dates.start_time}
              >
                <DayOfWeek htmlFor={"date" + id}>{dates?.month}</DayOfWeek>
                <Day htmlFor={"date" + id}>{dates?.day}</Day>
                <DayOfWeek htmlFor={"date" + id}>{dates?.weekday}</DayOfWeek>
                <input
                  id={"date" + id}
                  checked={checked === dates.id}
                  defaultValue={date}
                  value={dates.date}
                  onChange={(e) => {
                    setFormValue(e);
                    setChecked(dates.id);
                    setDate(e);
                    console.log(dates.id);
                  }}
                  name="date"
                  type={"radio"}
                />
              </Date>
              {date === dates.date && (
                <Time checked={time === dates.start_time} htmlFor="11">
                  {dates.start_time}
                  <input
                    id="11"
                    checked={time === dates.start_time}
                    defaultValue={time}
                    value={dates.start_time}
                    onChange={(e) => {
                      setFormValue(e);
                      getTickets(dates.id);
                    }}
                    name="time"
                    type={"radio"}
                  />
                </Time>
              )}
            </div>
          ))}
        </DatesWrapper>
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
  padding-top: 2px;
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
