import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GrImage, GrFormNext, GrFormPrevious } from "react-icons/gr";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Title from "../../../components/Title";
import image from "../../../assets/image.svg";
import Button from "../../../components/Button";
import { observer } from "mobx-react-lite";
import { useVenuePresenter } from "../venue/presenter";
import { useEventPresenter } from "./presenter";
const CreateEvent = observer((props) => {
  const [page, setPage] = useState(true);
  const { getVenues, venues } = useVenuePresenter;
  const { eventTypes } = useEventPresenter;

  return (
    <div>
      <Title width="auto">Create New Event</Title>
      {page ? (
        <EventDetails>
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
                  name="thumbnail"
                  accept="image/*"
                  onChange={(e) => console.log(e.target.files)}
                />
              </FileWrapper>
            </Imagewrapper>
            <FormWrapper>
              <label>Name</label>
              <Input
                name="name"
                className="textInput"
                type="text"
                width="auto"
              />
              <label>Description</label>
              <textarea
                style={{
                  width: "auto",
                  height: "100px",
                  margin: "10px 0px",
                  borderRadius: "6px",
                }}
                name="description"
              />
              <DetailsWrapper>
                <HostDetails>
                  <label>Host / Organization </label>
                  <Input
                    name="host"
                    className="textInput"
                    type="text"
                    width="auto"
                  />
                  <label>Venue</label>
                  <Select
                    name="venue"
                    onChange={(e) => console.log(e.target.value)}
                    defaultValue={venues[0]?.id}
                    options={venues}
                  />
                  <label>Type</label>
                  <Select
                    name="type"
                    onChange={(e) => console.log(e.target.value)}
                    options={eventTypes}
                  />
                </HostDetails>
                <div>
                  <DateWrapper>
                    <label>Date and Time</label>
                    <label>Select a day</label>
                    <Input name="date" type="date" width="auto" />
                  </DateWrapper>
                  <TimeWrapper>
                    <span>
                      <label>Starts at</label>
                      <Input name="start_time" type="time" width="auto" />
                    </span>
                    <span>
                      <label>Ends at</label>
                      <Input name="ending_time" type="time" width="auto" />
                    </span>
                  </TimeWrapper>
                </div>
              </DetailsWrapper>
            </FormWrapper>
            <NextPage onClick={() => setPage(false)}>
              <GrFormNext color="var(--purple)" size={40} />
            </NextPage>
          </Wrapper>
        </EventDetails>
      ) : (
        <TicketDetails>
          <h3>2. Ticket Details</h3>
          <TicketWrapper>
            <NextPage onClick={() => setPage(true)}>
              <GrFormPrevious color="var(--purple)" size={40} />
            </NextPage>
            <div style={{ width: "100%" }}>
              <InputWrapper>
                <div>
                  <label>Type: </label>
                  <form>
                    <div>
                      <input type="checkbox" id="Early" name="Early" />
                      <label for="Early">Early Bird</label>
                    </div>

                    <div>
                      <input type="checkbox" id="General" name="General" />
                      <label for="General">General Admission</label>
                    </div>
                    <div>
                      <input type="checkbox" id="VIP" name="VIP" />
                      <label for="VIP">VIP</label>
                    </div>
                  </form>
                </div>
                <div style={{ display: "grid" }}>
                  <label>Price: </label>
                  <Input placeholder="R 0" width="120px" />
                </div>
                <div style={{ display: "grid" }}>
                  <label>No. of Tickets: </label>
                  <Input placeholder="0" width="120px" />
                </div>
              </InputWrapper>
              <ButtonsWrapper>
                <Button
                  color="var(--darkpurple)"
                  border="1px solid var(--darkpurple)"
                  hover="var(--darkpurple)"
                  width="115px"
                  onClick={() => props.onClick()}
                >
                  Cancel
                </Button>
                <Button
                  color="white"
                  border="1px solid var(--darkpurple)"
                  width="115px"
                  hover="var(--purple)"
                  background="var(--darkpurple)"
                  onClick={() => alert("Create")}
                >
                  Create
                </Button>
              </ButtonsWrapper>
            </div>
          </TicketWrapper>
        </TicketDetails>
      )}
    </div>
  );
});
export default CreateEvent;

const EventDetails = styled.div``;
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

const TicketDetails = styled.div``;
const TicketWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 250px;
  width: 70%;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 250px;
  align-items: center;
`;
const NextPage = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
