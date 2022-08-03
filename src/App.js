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
import Register from "./pages/admin/auth/Register";
import { NavigationStore } from "./stores/navigationStore";
import { observer } from "mobx-react-lite";
import AddVenue from "./pages/admin/venue/AddVenue";
import AdminVenues from "./pages/admin/venue/Venues";
import UpdateVenue from "./pages/admin/venue/UpdateVenue";
import Promo from "./pages/admin/promo/Promo";
import { UserStore } from "./stores/userStore";
import ResetPassword from "./pages/admin/auth/ResetPassword";
import ForgotPassword from "./pages/admin/auth/ForgotPassword";
import Announcement from "./pages/admin/announcement/Announcements";
// Front of house screen
import Foh from "./pages/admin/FrontOfHouse/FrontOfHouse";
import Scan_Qr_Code from "./pages/admin/FrontOfHouse/Scan-QR-Code";
import CashBooking from "./pages/admin/FrontOfHouse/CashBooking";
import GuestListSeach from "./pages/admin/FrontOfHouse/GuestListSearch";
import ConfirmCashBooking from "./pages/admin/FrontOfHouse/ConfirmCashPayment";

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
        {/*FOH Screen*/}
        <Route path="admin/:foh-main" element={<Foh />} />
        <Route
          path="admin/foh-main/guest-list-search-qr-code"
          element={<Scan_Qr_Code />}
        />
        <Route
          path="admin/foh-main/guest-list-search-searchbar"
          element={<GuestListSeach />}
        />
        <Route path="admin/:cash_booking" element={<CashBooking />} />
        <Route
          path="admin/cash_booking/confirm-cash-booking"
          element={<ConfirmCashBooking />}
        />

        <Route path="events/:event" element={<EventDetails />} />
        <Route path="booking/:event" element={<Booking />} />
        <Route path="venues" element={<Venues />} />
        <Route path="about" element={<About />} />
        <Route path="admin" element={<Login />} />
        <Route path="admin/register" element={<Register />} />
        <Route path="admin/login" element={<Login />} />
        <Route path="admin/forgot-password" element={<ForgotPassword />} />
        <Route path="admin/reset-password" element={<ResetPassword />} />
        <Route path="admin/venues" element={<AdminVenues />} />
        <Route path="admin/venues/add" element={<AddVenue />} />
        <Route path="admin/venues/update" element={<UpdateVenue />} />
        <Route path="admin/promo" element={<Promo />} />
        <Route path="admin/announcements" element={<Announcement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
});
export default App;
