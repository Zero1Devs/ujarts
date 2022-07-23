import React, { useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import NewAnnouncement from "./NewAnnouncement";
import AnnouncementList from "./AnnouncementList";
import Toggle from "../../../components/Toggle";
const Announcement = () => {
  const [screen, setScreen] = useState(false);
  return (
    <AdminLayout>
      <Toggle
        OnClick={(e) => setScreen(e)}
        value={screen}
        options={["Announcement List", "New Announcement"]}
        width="400px"
      />
      {screen ? (
        <NewAnnouncement onClick={(e) => setScreen(e)} />
      ) : (
        <AnnouncementList />
      )}
    </AdminLayout>
  );
};

export default Announcement;
