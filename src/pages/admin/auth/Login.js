import React, { useEffect } from "react";
import Button from "../../../components/Button";
import { observer } from "mobx-react";
import { useAdminPresenter } from "./presenter";
import { useUserStore } from "../../../stores/userStore";
import { NavigationStore } from "../../../stores/navigationStore";
import AuthForm, { Input } from "../../../components/Forms/AuthForm";
import { Link } from "react-router-dom";

const LoginForm = observer(() => {
  const { login, setFormValue, loading } = useAdminPresenter;
  const { isLoggedIn, checkUser } = useUserStore;
  const navigation = NavigationStore;
  useEffect(() => {
    if (isLoggedIn) checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AuthForm>
      <h3>Login</h3>
      <Input
        type="text"
        name="email"
        onChange={(e) => setFormValue(e)}
        placeholder="Email/Username"
        className="textInput"
      />
      <Input
        type="password"
        name="password"
        onChange={(e) => setFormValue(e)}
        placeholder="Password"
        className="textInput"
      />
      <Link style={{ alignSelf: "flex-end" }} to="/admin/forgot-password">
        Forgot Password
      </Link>
      <Button
        style={{ marginTop: "10px" }}
        background="var(--orange)"
        width={"103%"}
        hover="var(--darkorange)"
        onClick={login}
        loading={loading.toString()}
      >
        Login
      </Button>
    </AuthForm>
  );
});
export default LoginForm;
