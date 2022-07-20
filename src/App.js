import React, { useEffect } from "react";
import "./App.css";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import Events from "./pages/Events";
import Venues from "./pages/Venues";
import EventDetails from "./pages/EventDetails";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Login from "./pages/admin/auth/Login";
import NotFound from "./pages/NotFound";
import SupaTest from "./SupaTest";
import Register from "./pages/admin/auth/Register";
import { NavigationStore } from "./stores/navigationStore";
import { observer } from "mobx-react-lite";
import AddVenue from "./pages/admin/venue/AddVenue";
import ListVenues from "./pages/admin/venue/index";
import UpdateVenue from "./pages/admin/venue/UpdateVenue";
import AddPromo from "./pages/admin/promo/AddPromo";
import PromoList from "./pages/admin/promo/PromoList";
import { UserStore } from "./stores/userStore";
import ResetPassword from "./pages/admin/auth/ResetPassword";
import ForgotPassword from "./pages/admin/auth/ForgotPassword";

const App = observer(() => {
  const { history } = NavigationStore;
  const { init } = UserStore;

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="supatest" element={<SupaTest />} />
        <Route path="events" element={<Events />} />
        <Route path="events/:event" element={<EventDetails />} />
        <Route path="booking/:event" element={<Booking />} />
        <Route path="venues" element={<Venues />} />
        <Route path="about" element={<About />} />
        <Route path="admin" element={<Login />} />
        <Route path="admin/register" element={<Register />} />
        <Route path="admin/login" element={<Login />} />
        <Route path="admin/forgot-password" element={<ForgotPassword />} />
        <Route path="admin/reset-password" element={<ResetPassword />} />
        <Route path="admin/venues" element={<ListVenues />} />
        <Route path="admin/venues/add" element={<AddVenue />} />
        <Route path="admin/venues/update" element={<UpdateVenue />} />
        <Route path="admin/promo" element={<PromoList />} />
        <Route path="admin/promo/add" element={<AddPromo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
});
export default App;
