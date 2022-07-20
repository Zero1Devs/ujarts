import React, { useEffect } from "react";
import Button from "../../../components/Button";
import { observer } from "mobx-react";
import { useAdminPresenter } from "./presenter";
import { UserStore } from "../../../stores/userStore";
import { NavigationStore } from "../../../stores/navigationStore";
import AuthForm, { Input } from "../../../components/Forms/AuthForm";
import { Link } from "react-router-dom";

const LoginForm = observer(() => {
  const { login, setFormValue, loading } = useAdminPresenter;
  const { isLoggedIn } = UserStore;
  const navigation = NavigationStore;
  useEffect(() => {
    if (isLoggedIn) navigation.replace("/admin/venues");
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
      <Link style={{alignSelf:"flex-end"}} to="/admin/forgot-password">
        Forgot Password
      </Link>
      <Button
        style={{ marginTop: "10px" }}
        background="var(--orange)"
        width={"103%"}
        hover="var(--darkorange)"
        onClick={login}
        loading={loading}
      >
        Login
      </Button>
    </AuthForm>
  );
});
export default LoginForm;
