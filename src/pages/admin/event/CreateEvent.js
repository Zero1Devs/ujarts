import React from "react";
import styled from "styled-components";
import { GrImage } from "react-icons/gr";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Title from "../../../components/Title";
import image from "../../../assets/image.svg";
const CreateEvent = () => {
  return (
    <div>
      <Title width="auto">Create New Event</Title>
      <h3>1. Event Details</h3>
      <Wrapper>
        <Imagewrapper>
          <label>Upload an Image</label>
          <FileWrapper>
            <Label>
              <GrImage color="var(--grey)" size={80} />
              <label>Drag and drop, or browse</label>
            </Label>
            <File
              type="file"
              id="single"
              accept="image/*"
              onChange={(e) => console.log(e.target.files)}
            />
          </FileWrapper>
        </Imagewrapper>
        <FormWrapper>
          <label>Name</label>
          <Input className="textInput" type="text" width="auto" />
          <label>Description</label>
          <textarea
            style={{
              width: "auto",
              height: "100px",
              margin: "10px 0px",
              borderRadius: "6px",
            }}
          />
          <DetailsWrapper>
            <HostDetails>
              <label>Host / Organization </label>
              <Input className="textInput" type="text" width="auto" />
              <label>Venue</label>
              <Select
                name="venue"
                onChange={(e) => console.log(e.target.value)}
                options={[
                  { id: "1", name: "Event 1" },
                  { id: "2", name: "Event 2" },
                  { id: "3", name: "Event 3" },
                ]}
              />
              <label>Type</label>
              <Select
                name="type"
                onChange={(e) => console.log(e.target.value)}
                options={[
                  { id: "1", name: "Event 1" },
                  { id: "2", name: "Event 2" },
                  { id: "3", name: "Event 3" },
                ]}
              />
            </HostDetails>
            <div>
              <DateWrapper>
                <label>Date and Time</label>
                <label>Select a day</label>
                <Input type="date" width="auto" />
              </DateWrapper>
              <TimeWrapper>
                <span>
                  <label>Starts at</label>
                  <Input type="time" width="auto" />
                </span>
                <span>
                  <label>Ends at</label>
                  <Input type="time" width="auto" />
                </span>
              </TimeWrapper>
            </div>
          </DetailsWrapper>
        </FormWrapper>
      </Wrapper>
    </div>
  );
};
export default CreateEvent;

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  column-gap: 100px;
`;
const DetailsWrapper = styled.div`
  display: flex;
  border: solid 0px blue;
  column-gap: 100px;
  div {
    flex: 1;
  }
`;
const HostDetails = styled.div`
  display: grid;
`;
const Imagewrapper = styled.div`
  flex: 1;
  height: 500px;
  max-width: 400px;
`;
const FormWrapper = styled.div`
  flex: 2;
  border: solid 0px red;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const DateWrapper = styled.div`
  display: grid;
`;
const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    flex: 1;
    display: grid;
  }
  column-gap: 30px;
`;

const FileWrapper = styled.div`
  flex: 1;
  border: dashed 02px black;
  height: 80%;
  background: var(--lightgrey);
  max-width: 400px;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  /*::before {
    content: url(${image});
    display: grid;
    place-items: center;
    text-align: center;
    border: solid 1px;
    height: 100%;
    width: 100%;
  }*/
`;
const File = styled.input`
  border: solid 0px;
  height: 100%;
  width: 100%;
  cursor: pointer;
  position: relative;
  ::-webkit-file-upload-button {
    display: none;
  }

  z-index: 1;
`;
const Label = styled.div`
  display: grid;
  place-items: center;
  position: absolute;
`;
