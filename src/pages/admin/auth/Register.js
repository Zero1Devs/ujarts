import React from "react";
import Button from "../../../components/Button";
import { observer } from "mobx-react";
import { useAdminPresenter } from "./presenter";
import AuthForm, { Input } from "../../../components/Forms/AuthForm";
import styled from "styled-components";
import * as Icon from "react-icons/fi";

const Register = observer(() => {
  const { signUp, setFormValue, error, loading } = useAdminPresenter;
  return (
    <AuthForm>
      <h3>Register</h3>
      <Input
        type="text"
        name="name"
        onChange={(e) => setFormValue(e)}
        placeholder="Name"
      />
      <Input
        type="text"
        name="surname"
        onChange={(e) => setFormValue(e)}
        placeholder="Surname"
      />

      <Input
        type="email"
        name="email"
        onChange={(e) => setFormValue(e)}
        placeholder="Email/Username"
      />
      <Input
        type="password"
        name="password"
        onChange={(e) => setFormValue(e)}
        placeholder="Password"
      />
      <Input
        type="password"
        name="confirm_password"
        onChange={(e) => setFormValue(e)}
        placeholder="Confirm Password"
      />
      <Error display={error.toString()}>
        <Icon.FiInfo color="red" width={17} />
        <span>Your passwords don't match!</span>
      </Error>
      <Button
        style={{ marginTop: "10px" }}
        background="var(--orange)"
        width={"103%"}
        hover="var(--darkorange)"
        onClick={signUp}
        loading={loading.toString()}
      >
        Register
      </Button>
    </AuthForm>
  );
});
export default Register;
export const Error = styled.label`
  color: red;
  display: ${({ display }) => (display === "true" ? "flex" : "none")};
  text-align: center;
  span {
    margin-left: 5px;
  }
`;
