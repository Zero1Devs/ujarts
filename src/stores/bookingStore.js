import { makeAutoObservable, runInAction } from "mobx";
import { SupabaseGateway } from "../gateways/SupaBaseGateway";

class BookingStore {
  supabaseGateway = SupabaseGateway;
  tickets = [];
  orders = [];
  constructor() {
    makeAutoObservable(this);
  }
  getTickets = async (id) => {
    try {
      const { data, error } = await this.supabaseGateway.selectFromTableFilter(
        "ticket",
        { column: "schedule_id", value: id }
      );
      if (error) throw new Error(error.message);
      runInAction(() => {
        this.tickets = data;
      });
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
  addCustomer = async (payload) => {
    try {
      const { data, error } = await this.supabaseGateway.insertToTable(
        "customer",
        payload
      );
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  orderTicket = async (payload) => {
    try {
      const { data, error } = await this.supabaseGateway.insertToTable(
        "order",
        payload
      );
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
  getOrders = async () => {
    try {
      const { data, error } =
        await this.supabaseGateway.selectFromTableWithForeignKey(
          "order",
          "customer(name,surname), payment_type(type)"
        );
      if (error) throw new Error(error.message);
    //  console.log(data);
      /*    runInAction(() => {
        this.orders = data;
      });*/
      return data;
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };
}
export const useBookingStore = new BookingStore();
