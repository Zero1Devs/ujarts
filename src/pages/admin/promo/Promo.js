import React, { useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import AddPromo from "./AddPromo";
import PromoList from "./PromoList";
import Toggle from "../../../components/Toggle";
import { observer } from "mobx-react-lite";

const Promo = observer(() => {
  const [screen, setScreen] = useState(false);

  return (
    <AdminLayout>
      <Toggle
        OnClick={(e) => setScreen(e)}
        value={screen}
        width="400px"
        options={["Promo Code List", "New Promo Code"]}
      />
      {screen ? <AddPromo onClick={(e) => setScreen(e)} /> : <PromoList />}
    </AdminLayout>
  );
});

export default Promo;
