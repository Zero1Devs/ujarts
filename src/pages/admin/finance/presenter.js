import { SupabaseGateway } from "../../../gateways/SupaBaseGateway";
import { autorun, makeAutoObservable, runInAction } from "mobx";
import { useBookingStore } from "../../../stores/bookingStore";
class FinancePresenter {
  constructor() {
    makeAutoObservable(this);
  }
  bookingStore = useBookingStore;
  orders = [];
  getOrders = async () => {
    try {
      const data = await this.bookingStore.getOrders();
      runInAction(() => {
        this.orders = data;
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
export const useFinancePresenter = new FinancePresenter();
