import React from "react";
import Title from "../../../components/Title";
import styled from "styled-components";
import { StyledInput } from "../../../components/Input";
import Select from "../../../components/Select";
import Button from "../../../components/Button";
import { useEventPresenter } from "../event/presenter";

const NewAnnouncement = (props) => {
  const { events } = useEventPresenter;

  return (
    <>
      <Title width="350px">New Announcement</Title>

      <Div className="container">
        <InputGroup>
          <label>Event</label>
          <Select
            width="210px"
            name="event"
            onChange={(e) => console.log(e.target.value)}
            options={events}
          />
        </InputGroup>
        <InputGroup>
          <label>Subject</label>
          <Input
            width="200px"
            type="text"
            name="discount"
            onChange={(e) => console.log(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <label>Message</label>
          <TextArea
            placeholder="Message"
            name="message"
            onChange={(e) => console.log(e.target.value)}
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
            onClick={() => alert("created")}
          >
            Create
          </Button>
        </InputGroup>
      </Div>
    </>
  );
};

export default NewAnnouncement;
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
const Input = styled(StyledInput)`
  :focus {
    outline: none !important;
    border: 2px solid var(--darkpurple);
  }
`;
const TextArea = styled.textarea`
  width: 200px;
  height: 100px;
  margin: 10px 0px;
  filter: drop-shadow(2px 2px 2px #45116d);
  border-radius: 6px;
  :focus {
    outline: none !important;
    border: 2px solid var(--darkpurple);
  }
`;
