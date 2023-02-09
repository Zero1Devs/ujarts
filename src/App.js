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
import Booking from "./pages/booking/Booking";
import About from "./pages/About";
import Login from "./pages/admin/auth/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/admin/auth/Register";
import { NavigationStore } from "./stores/navigationStore";
import { observer } from "mobx-react-lite";
import AddVenue from "./pages/admin/venue/AddVenue";
import AdminEvents from "./pages/admin/event";
import AdminVenues from "./pages/admin/venue/Venues";
import UpdateVenue from "./pages/admin/venue/UpdateVenue";
import Promo from "./pages/admin/promo/Promo";
import { useUserStore } from "./stores/userStore";
import ResetPassword from "./pages/admin/auth/ResetPassword";
import ForgotPassword from "./pages/admin/auth/ForgotPassword";
import Announcement from "./pages/admin/announcement/Announcements";
import UploadDownload from "./pages/UploadDownload";
// Front of house screen
import Search from "./pages/admin/FrontOfHouse/Search";
import ScanQRCode from "./pages/admin/FrontOfHouse/ScanQRCode";
import CashBooking from "./pages/admin/FrontOfHouse/CashBooking";
import GuestListSeach from "./pages/admin/FrontOfHouse/GuestListSearch";
import ConfirmCashBooking from "./pages/admin/FrontOfHouse/ConfirmCashPayment";
import TicketConfirmation from "./pages/booking/BookingTicketConfirmation";
import FinanceDept from "./pages/admin/finance/financeDept";
import Rsvp from "./pages/booking/Rsvp";
const App = observer(() => {
  const { history } = NavigationStore;
  const { init } = useUserStore;

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<Events />} />
        {/*FOH Screen*/}
        <Route path="admin/search" element={<Search />} />
        <Route path="admin/search/qr-code" element={<ScanQRCode />} />
        <Route
          path="admin/guest-list-search-searchbar"
          element={<GuestListSeach />}
        />
        <Route path="admin/cash-booking" element={<CashBooking />} />
        <Route
          path="admin/cash-booking/confirm"
          element={<ConfirmCashBooking />}
        />
        <Route path="ticket-confirmation" element={<TicketConfirmation />} />

        {/* Finance Screen */}
        <Route path="admin/finance" element={<FinanceDept />} />

        <Route path="events/:event" element={<EventDetails />} />
        <Route path="booking/:event" element={<Booking />} />
        <Route path="rsvp/:event" element={<Rsvp />} />
        <Route path="venues" element={<Venues />} />
        <Route path="about" element={<About />} />
        <Route path="admin" element={<Login />} />
        <Route path="admin/register" element={<Register />} />
        <Route path="admin/login" element={<Login />} />
        <Route path="admin/forgot-password" element={<ForgotPassword />} />
        <Route path="admin/reset-password" element={<ResetPassword />} />
        <Route path="admin/venues" element={<AdminVenues />} />
        <Route path="admin/events" element={<AdminEvents />} />
        <Route path="admin/venues/add" element={<AddVenue />} />
        <Route path="admin/venues/update" element={<UpdateVenue />} />
        <Route path="upload" element={<UploadDownload />} />
        <Route path="admin/promo" element={<Promo />} />
        <Route path="admin/announcements" element={<Announcement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
});
export default App;
