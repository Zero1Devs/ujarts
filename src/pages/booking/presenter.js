import { autorun, makeAutoObservable } from "mobx";

class Booking {
  name = "";
  email = "";
  confirm_email = "";
  phonenumber = "";
  quantity;

  constructor() {
    makeAutoObservable(this);
  }
  setFormValue = (e) => {
    this[e.target.name] = e.target.value;
  };

  getCost = () => {
    let cost = 125.0 * this.quantity;
    return cost;
  };
}

export const useBooking = new Booking();
