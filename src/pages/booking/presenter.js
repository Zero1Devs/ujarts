import { autorun, makeAutoObservable, runInAction } from "mobx";
//import { makePersistable } from "mobx-persist-store";
import { SupabaseGateway } from "../../gateways/SupaBaseGateway";
import { NavigationStore } from "../../stores/navigationStore";
import {
  BookingStepOne,
  BookingStepThree,
  BookingStepTwo,
  getValidationErrorMessage,
} from "../../util/validator";
import { useBookingStore } from "../../stores/bookingStore";
import { usePromoStore } from "../../stores/promoStore";
class Booking {
  supabase = SupabaseGateway;
  bookingStore = useBookingStore;
  promoStore = usePromoStore;
  name = "";
  surname = "";
  email = "";
  confirm_email = "";
  phone_number = "";
  date = "";
  time = "";
  quantity = 0;
  event = "";
  place = "";
  eventType = "";
  screen = 1;
  payment_type = "";
  guest = {};
  discount = "";
  promo = {};
  navigation = NavigationStore;
  dates = [];
  constructor() {
    makeAutoObservable(this);
    /* makePersistable(this, {
      name: "@booking",
      properties: ["booking"],
      storage: window.sessionStorage,
    });*/
    autorun(() => {
      this.screen = sessionStorage?.getItem("screen") || 1;
      this.name = sessionStorage?.getItem("name") || "";
      this.surname = sessionStorage?.getItem("surname") || "";
      this.email = sessionStorage?.getItem("email") || "";
      this.confirm_email = sessionStorage?.getItem("confirm_email") || "";
      this.phone_number = sessionStorage?.getItem("phone_number") || "";
      this.quantity = parseInt(sessionStorage?.getItem("quantity")) || 0;
    });
  }

  setFormValue = (e) => {
    this[e.target.name] = e.target.value;
    sessionStorage.setItem(e.target.name, e.target.value);
    console.log(e.target.value);
  };
  setDate = (e) => {
    this.time = "";
    console.log(e.target.value);
  };
  setEventPlace = (event) => {
    this.event = event?.name;
    this.place = event?.venues?.name;
    this.eventType = event?.event_types?.type;
    sessionStorage.setItem("event", this.event);
    sessionStorage.setItem("place", this.place);
    sessionStorage.setItem("type", this.eventType);
  };
  getBooking = () => {
    this.quantity = parseInt(sessionStorage?.getItem("quantity"));
    this.date = sessionStorage?.getItem("date");
    this.time = sessionStorage?.getItem("time");
    this.event = sessionStorage?.getItem("event");
    this.place = sessionStorage?.getItem("place");
    this.eventType = sessionStorage?.getItem("type");
  };
  setQuantity = (quantity) => {
    this.quantity = quantity;
    sessionStorage.setItem("quantity", quantity);
  };
  setPaymentType = (e) => {
    this.payment_type = e.target.value;
  };
  getCost = () => {
    let cost = 0;
    if (this.tickets[0]?.price > 0) {
      cost = this.tickets[0]?.price * this.quantity;
    } else cost = 125 * this.quantity;
    console.log(cost);
    return cost;
  };
  MoveForward = () => {};
  //to delete
  getGuest = async (reference) => {
    try {
      const data = await this.supabase.selectFromTableFilter("booking", {
        column: "reference",
        value: reference,
      });
      runInAction(() => {
        this.guest = data.data;
      });
      console.log(this.guest);
      return this.guest;
    } catch (error) {
      console.log(error.message);
    }
  };
  switchMonth = (month) => {
    switch (month) {
      case "Jan":
        return "January";
      case "Feb":
        return "February";
      case "Mar":
        return "March";
      case "Apr":
        return "April";
      case "May":
        return "May";

      case "Jun":
        return "June";

      case "Jul":
        return "July";

      case "Aug":
        return "August";

      case "Sep":
        return "September";

      case "Oct":
        return "October";

      case "Nov":
        return "November";

      case "Dec":
        return "December";
      default:
        return month;
    }
  };
  getDates = async (id) => {
    try {
      const { data, error } = await this.supabase.selectDates(id);
      if (error) throw new Error(error.message);
      runInAction(() => {
        this.dates = data.map(
          ({ id, date, event_id, start_time, end_time }) => ({
            id,
            event_id,
            date:
              new Date(date).toDateString().split(" ")[2] +
              " " +
              new Date(date).toDateString().split(" ")[1],
            month: this.switchMonth(
              new Date(date).toDateString().split(" ")[1]
            ),
            day: new Date(date).toDateString().split(" ")[2],
            weekday: new Date(date).toDateString().split(" ")[0],
            start_time: start_time.substring(0, 5),
            end_time,
          })
        );
      });
      console.log(this.dates);
    } catch (error) {
      console.log(error.message);
    }
  };
  GoBack = (screen) => {
    this.screen = screen;
    sessionStorage.setItem("screen", this.screen);
    if (this.screen === 0) {
      let confirm = window.confirm("Are you sure you want to leave?");
      this.screen = 1;
      sessionStorage.setItem("screen", this.screen);
      if (confirm) {
        this.event = "";
        this.place = "";
        this.eventType = "";
        this.name = "";
        this.surname = "";
        this.email = "";
        this.confirm_email = "";
        this.phone_number = "";
        this.quantity = 0;
        this.date = "";
        this.time = "";
        this.discount = "";
        this.promo = {};
        sessionStorage.clear();
        this.navigation.push("/");
      }
    }
  };
  changeScreen = (screen) => {
    this.screen = screen;
  };
  setScreen = async () => {
    try {
      switch (this.screen) {
        //(prev) => (prev < 4 ? prev + 1 : 4)
        case 1:
          await BookingStepOne.validate(
            { date: this.date, time: this.time },
            { abortEarly: false }
          );
          this.changeScreen(2);
          break;
        case 2:
          await BookingStepTwo.validate(
            { quantity: this.quantity },
            { abortEarly: false }
          );
          this.changeScreen(3);
          break;
        case 3:
          await BookingStepThree.validate(
            {
              name: this.name,
              surname: this.surname,
              email: this.email,
              confirm_email: this.confirm_email,
              phone_number: this.phone_number,
            },
            { abortEarly: false }
          );
          this.changeScreen(4);
          break;
        case 4:
          this.changeScreen(5);
          break;
        case 5:
          this.changeScreen(5);
          break;
        default:
          this.changeScreen(1);
          break;
      }
      sessionStorage.setItem("screen", this.screen);
    } catch (error) {
      let errors = "";
      error.inner.forEach((err) => {
        errors += getValidationErrorMessage(err.path) + err.message + "\n";
      });
      alert(errors);
    }
  };
  getTickets = async (id) => {
    try {
      const tickets = await this.bookingStore.getTickets(id);
      console.log(tickets);
    } catch (error) {
      console.log(error.message);
    }
  };
  get tickets() {
    return this.bookingStore.tickets;
  }
  setDiscount = (message) => {
    this.discount = message;
  };
  checkPromo = async (id) => {
    try {
      const data = await this.promoStore.checkPromo(id);
      runInAction(() => {
        this.promo = data;
      });
      if (this.promo) console.log(this.promo);
      this.setDiscount(
        "Discount of " +
          this.promo[0]?.discount * 100 +
          "% will be applied at checkout"
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  orderTicket = async (reference) => {
    try {
      let customer = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        cellphone: this.phone_number,
      };
      const customerDetails = await this.bookingStore.addCustomer(customer);
      let orderDetails = {
        id_payment_type: 1,
        customer_id: customerDetails[0]?.id,
        ticket_id: this.tickets[0]?.id,
        quantity: this?.quantity,
        price: this.getCost() * this.promo?.discount || this.getCost(),
        discount: this.promo?.discount || 1,
        user_id: 16,
        reference_number: reference,
      };
      await this.bookingStore.orderTicket(orderDetails);
    } catch (error) {
      console.log(error.message);
    }
  };
}

export const useBookingPresenter = new Booking();
