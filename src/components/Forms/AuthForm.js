import React from "react";
import ujlogo from "../../assets/ujLogo.jpg";
import "../../styles/index.css";
import "../../styles/adminLayout.css";
import { observer } from "mobx-react";
import styled from "styled-components";
import { StyledInput } from "../Input";

const AuthForm = observer((props) => {
  return (
    <AdminWrapper>
      <ImgWrapper>
        <img src={ujlogo} width="300px" alt="UJ logo" height="300px" />
      </ImgWrapper>
      <FormWrapper>
        <Form>
          <h1 style={{color:"var(--darkpurple)"}}>UJ Arts&Culture</h1>
          {props.children}</Form>
      </FormWrapper>
    </AdminWrapper>
  );
});
export default AuthForm;

const AdminWrapper = styled.div`
  display: flex;
`;
const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: white;
  border: solid 0px;
  flex: 4;
`;
const ImgWrapper = styled.div`
  height: 100vh;
  flex: 1;
  border: solid 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff6515;
`;

const Form = styled.div`
  padding: 20px 40px;
  margin-left: 30px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`;
export const Input = styled(StyledInput)`
  background: var(--lightgray);
  ::placeholder {
    color: black;
  }
`;
