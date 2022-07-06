import React, { useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ujlogo from "../../assets/ujLogo.jpg";
import "../../styles/index.css";
import "../../styles/adminLayout.css";
import { observer } from "mobx-react";
import { useAdminPresenter } from "./presenter";
import { UserStore } from "../../stores/userStore";
import { NavigationStore } from "../../stores/navigationStore";

const Login = observer(() => {
  const { login, setFormValue } = useAdminPresenter;
  const { isLoggedIn } = UserStore;
  const navigation = NavigationStore;
  useEffect(() => {
    if (isLoggedIn) navigation.replace("/admin/index");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      style={{
        display: "flex",
        border: "",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexWrap: "wrap",
      }}
    >
      <img src={ujlogo} width="20%" alt="UJ logo" height="40%" />
      <div className="loginForm">
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
        <Button
          text="Login"
          className="btnBookNow"
          type="submit"
          style={{ width: "100%", marginTop: "20px", height: "40px" }}
          onClick={login}
        />
      </div>
    </div>
  );
});
export default Login;
