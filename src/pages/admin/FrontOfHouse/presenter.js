import { SupabaseGateway } from "../../gateways/SupaBaseGateway";
import { autorun, makeAutoObservable, runInAction } from "mobx";

class FrontOfHouse {
  supabase = SupabaseGateway;
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
  amount_given = 0;
  change = 0;
  guest = {};
  //navigation = NavigationStore;
  constructor() {
    makeAutoObservable(this);
  }

  setFormValue = (e) => {
    this[e.target.name] = e.target.value;
    sessionStorage.setItem(e.target.name, e.target.value);
    console.log(e.target.value);
  };
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
}
export const useFrontOfHousePresenter = new FrontOfHouse();
