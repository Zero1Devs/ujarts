import React from "react";
import AdminLayout from "../AdminLayout";
import Title from "../../../components/Title";
import styled from "styled-components";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Button from "../../../components/Button";

const AddPromo = () => {
  return (
    <AdminLayout>
      <Title width="300px">New Promo Code</Title>

      <Div className="container">
        <InputGroup>
          <label>Promo Code</label>
          <Input
            width="200px"
            type="text"
            name="promo_code"
            onChange={() => alert()}
          />
        </InputGroup>

        <InputGroup>
          <label>Discount</label>
          <Input
            width="200px"
            type="text"
            name="discount"
            onChange={() => alert()}
          />
        </InputGroup>
        <InputGroup>
          <label>Event</label>
          <Select
            width="210px"
            name="event"
            onChange={() => alert()}
            options={[
              { id: "1", name: "Event 1" },
              { id: "2", name: "Event 2" },
              { id: "3", name: "Event 3" },
            ]}
          />
        </InputGroup>
        <InputGroup width="250px" marginTop="50px">
          <Button
            width="100px"
            color="var(--orange)"
            hover="var(--darkorange)"
            border="solid 1px var(--darkorange)"
            onClick={() => alert("canceled")}
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
    </AdminLayout>
  );
};

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
  margin:10px;
  margin-top:${({ marginTop }) => marginTop || "10px"};
  width: ${({ width }) => width || "320px"};
`;
