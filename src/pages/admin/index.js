import { observer } from "mobx-react";
import React, { useEffect } from "react";
import Button from "../../components/Button";
import { NavigationStore } from "../../stores/navigationStore";
import { useUserStore } from "../../stores/userStore";
import { useAdminPresenter } from "./presenter";

const Index = observer(() => {
  const { logout, user } = useAdminPresenter;
  const { replace } = NavigationStore;
  const { isLoggedIn } = useUserStore;

  const Logout = () => {
    let c = window.confirm("Are you sure?");
    if (c) logout();
  };
  useEffect(() => {
    if (!isLoggedIn) replace("/admin");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h1>you are logged</h1>
      <h1>{user?.email}</h1>
      <Button onClick={Logout} className="btnBookNow" text="Logout" />
    </>
  );
});
export default Index;
