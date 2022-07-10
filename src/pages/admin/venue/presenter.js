import { makeAutoObservable, runInAction } from "mobx";
import { useVenueStore } from "../../../stores/venueStore";

class VenuePresenter {
  venue = {
    id: new Int32Array(),
    name: String(),
    address: String(),
    seats: new Int32Array(),
  };
  venueStore = useVenueStore;
  venues = [];
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
  deleteVenue = async ({ id }) => {
    console.log(id);
    let confirm = window.confirm();
    if (confirm) {
      try {
        await this.venueStore.deleteVenue(id);
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  setVenue = (venue) => {
    this.venue = venue;
    console.log(this.venue);
  };
  getVenues = async () => {
    try {
      const data = await this.venueStore.getVenues();

      runInAction(() => {
        this.venues = data.map(({ id, name, address, seats }) => ({
          id: id,
          name: name,
          address: address,
          seats: seats,
        }));
      });
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  clearFields = () => {
    this.venue = { name: "", address: "", seats: 0 };
  };
}
export const useVenuePresenter = new VenuePresenter();
