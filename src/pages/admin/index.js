import { observer } from "mobx-react";
import React, { useEffect } from "react";
import Button from "../../components/Button";
import { useAdminPresenter } from "./presenter";
import { UserStore } from "../../stores/userStore";

const Index = observer(() => {
  const { logout, user } = useAdminPresenter;

  return (
    <>
      <h1>you are logged</h1>
      <h1>{user.email}</h1>
      <Button onClick={logout} className="btnBookNow" text="Logout" />
    </>
  );
});
export default Index;
