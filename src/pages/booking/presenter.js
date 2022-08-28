import { autorun, makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class Booking {
  name = "";
  email = "";
  confirm_email = "";
  phonenumber = "";
  quantity = 0;
  screen = 1;
  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "@booking",
      properties: ["booking"],
      storage: window.localStorage,
    });
    autorun(() => {
      this.name = localStorage.getItem("name");
      this.email = localStorage.getItem("email");
      this.confirm_email = localStorage.getItem("confirm_email");
      this.phonenumber = localStorage.getItem("phonenumber");
      this.quantity = parseInt(localStorage.getItem("quantity")) || 0;
    });
  }

  setFormValue = (e) => {
    this[e.target.name] = e.target.value;
    localStorage.setItem(e.target.name, e.target.value);
  };
  setQuantity = (quantity) => {
    this.quantity = quantity;
  };

  getCost = () => {
    let cost = 125.0 * this.quantity;
    return cost;
  };
}

export const useBookingPresenter = new Booking();
