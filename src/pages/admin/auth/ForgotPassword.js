import React from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import "../../../styles/index.css";
import "../../../styles/adminLayout.css";
import { observer } from "mobx-react";
import { useAdminPresenter } from "./presenter";
import AuthForm from "../../../components/Forms/AuthForm";

const ForgotPassword = observer(() => {
  const { sendResetPasswordEmail, setFormValue, loading } = useAdminPresenter;

  return (
    <AuthForm>
      <h2>Forgot password</h2>
      <Input
        type="text"
        name="email"
        onChange={(e) => setFormValue(e)}
        placeholder="Email/Username"
        className="textInput"
      />

      <Button
        style={{ marginTop: "10px" }}
        background="var(--orange)"
        width={"103%"}
        hover="var(--darkorange)"
        onClick={sendResetPasswordEmail}
        loading={loading}
      >
        Forgot Password
      </Button>
    </AuthForm>
  );
});
export default ForgotPassword;
