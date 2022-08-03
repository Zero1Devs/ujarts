import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import EventForm from "../../../components/Forms/EventForm";
import Input from "../../../components/Input";
const CreateEvent = () => {
  return (
    <div style={{ display: "flex", columnGap: "100px", border: "solid 1px" }}>
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <label>Name</label>
        <Input className="textInput" type="text" placeholder="Name" />

        <label>Description</label>
        <textarea
          placeholder="Description"
          style={{
            width: "96%",
            height: "150px",
            margin: "10px 0px",
            borderRadius: "6px",
          }}
        />
      </div>
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <label>Name</label>
        <Input className="textInput" type="text" placeholder="Name" />

        <label>Description</label>
        <Input className="textInput" type="text" placeholder="Name" />
        <div style={{ display: "flex", columnGap: "50px" }}>
          <div>
            <label>Name</label>
            <Input className="textInput" type="text" placeholder="Name" />
          </div>
          <div>
            <label>Name</label>
            <Input className="textInput" type="text" placeholder="Name" />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <label>Name</label>
        <Input className="textInput" type="text" placeholder="Name" />

        <label>Description</label>
        <textarea
          placeholder="Description"
          style={{
            width: "96%",
            height: "100px",
            margin: "10px 0px",
            borderRadius: "6px",
          }}
        />
        <div style={{ display: "flex", columnGap: "50px" }}>
          <div>
            <label>Name</label>
            <Input className="textInput" type="text" placeholder="Name" />
          </div>
          <div>
            <label>Name</label>
            <Input className="textInput" type="text" placeholder="Name" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateEvent;
