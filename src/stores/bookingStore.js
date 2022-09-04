import { autorun, makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class BookingStore {
  constructor() {
    makeAutoObservable(this);
  }
}
export const useBookingStore = new BookingStore();
