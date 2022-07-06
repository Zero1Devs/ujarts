import { makeAutoObservable } from "mobx";
import { useVenueStore } from "../../../stores/venueStore";

class VenuePresenter {
  venue = { name: String(), address: String(), seats: new Int32Array() };
  venueStore = useVenueStore;
  constructor() {
    makeAutoObservable(this);
  }

  setFormValue = (e) => {
    this.venue[e.target.name] = e.target.value;
    console.log(this.venue[e.target.name]);
  };
  createVenue = async () => {
    try {
      await this.venueStore.createVenue(this.venue);
    } catch (error) {
      console.log(error.message);
    }
  };
  updateVenue = () => {
    alert("hey");
  };
  clearFields = () => {
    this.venue = { name: "", address: "", seats: 0 };
  };
}
export const useVenuePresenter = new VenuePresenter();
