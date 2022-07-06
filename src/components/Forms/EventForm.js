import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { observer } from "mobx-react";
const EventForm = observer(({event}) => {
  return (
    <form className="loginForm" style={{ width: "60%", marginLeft: 0 }}>
      <Input className="textInput" type="text" placeholder="Name" />
      <textarea
        placeholder="Description"
        style={{
          width: "96%",
          height: "100px",
          margin: "10px 0px",
          borderRadius: "6px",
        }}
      />
      <div
        style={{
          display: "flex",
          width: "98%",
          border: "none 1px",
          padding: "20px 0px",
        }}
      >
        <div className="group">
          <label>Venue</label>
          <select
            name=""
            style={{
              width: "100%",
              height: "45px",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
            <option value={""}>APK</option>
            <option value={""}>APB</option>
            <option value={""}>DFC</option>
            <option value={""}>SWC</option>
          </select>
        </div>
        <div className="group">
          <label>Seats</label>
          <Input
            class="textInput"
            type="number"
            min="1"
            placeholder="Number of seats"
            style={{ width: "97%" }}
          />
        </div>
      </div>
      <label style={{ alignSelf: "self-start", marginLeft: "15px" }}>
        Date
      </label>
      <Input
        type="datetime-local"
        style={{
          width: "96%",
          margin: "10px",
          height: "40px",
          border: "none",
          borderRadius: "5px",
        }}
      />
      <div
        style={{
          display: "flex",
          width: "98%",

          border: "none 2px",
          padding: "20px 0px",
        }}
      >
        <div className="group">
          <label>Price</label>
          <Input
            class="textInput"
            type="text"
            min="1"
            placeholder="Price"
            style={{ width: "97%" }}
          />
        </div>
        <div className="group">
          <label>Duration</label>
          <Input
            class="textInput"
            type="number"
            min="1"
            style={{ width: "97%" }}
          />
        </div>
      </div>
      <Button
        text="Create"
        className="btnBookNow"
        style={{ width: "97%", height: "40px" }}
      />
    </form>
  );
});
export default EventForm;

const styles = {
  group: {
    display: "block",
    flex: 1,
    paddingRight: 0,
    border: "solid blue",
  },
};
