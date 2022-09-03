import React from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import "../../../styles/index.css";
import "../../../styles/adminLayout.css";
import { observer } from "mobx-react";
import { useAdminPresenter } from "./presenter";
import { Error } from "./Register";
import * as Icon from "react-icons/fi";
import AuthForm from "../../../components/Forms/AuthForm";

const ResetPassword = observer(() => {
  const { resetPassword, setFormValue, error, loading } = useAdminPresenter;

  return (
    <AuthForm>
      <h2>Reset your password</h2>

      <Input
        type="password"
        name="password"
        onChange={(e) => setFormValue(e)}
        placeholder="Password"
        className="textInput"
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
        onClick={resetPassword}
        loading={loading.toString()}
      >
        Reset Password
      </Button>
    </AuthForm>
  );
});
export default ResetPassword;
