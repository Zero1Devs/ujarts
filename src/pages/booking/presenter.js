import { autorun, makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { NavigationStore } from "../../stores/navigationStore";
import {
  BookingStepOne,
  BookingStepThree,
  BookingStepTwo,
  getValidationErrorMessage,
} from "../../util/validator";
class Booking {
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
  navigation = NavigationStore;

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
    //this.date = e.target.name;
    //this.date = e.target.value;
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
    let cost = 125.0 * this.quantity;
    return cost;
  };
  MoveForward = () => {};
  GoBack = (screen) => {
    this.screen = screen;
    if (this.screen === 0) {
      let confirm = window.confirm("Are you sure you want to leave?");
      this.screen = 1;
      if (confirm) {
        sessionStorage.clear();
        this.navigation.push("/");
      }
    }
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
          this.screen = 2;

          break;
        case 2:
          await BookingStepTwo.validate(
            { quantity: this.quantity },
            { abortEarly: false }
          );
          this.screen = 3;
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
          this.screen = 4;
          break;
        case 4:
          this.screen = 5;
          break;
        case 5:
          this.screen = 5;
          break;
        default:
          this.screen = 1;
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
}

export const useBookingPresenter = new Booking();
