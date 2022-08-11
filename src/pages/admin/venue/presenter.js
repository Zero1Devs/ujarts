import { makeAutoObservable, runInAction, autorun } from "mobx";
import { useVenueStore } from "../../../stores/venueStore";

class VenuePresenter {
  venue = {
    id: new Int32Array(),
    name: String(),
    campus: new Int32Array(),
    seats: new Int32Array(),
  };
  venueStore = useVenueStore;
  venues = [];
  campuses = [];
  constructor() {
    makeAutoObservable(this);
    autorun(() => this.getVenues());
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
  updateVenue = async () => {
    try {
      const { id, name, campus, seats } = this.venue;
      let venue = { id, name, campus_id: campus, seats };
      await this.venueStore.updateVenue(venue);
    } catch (error) {
      console.log(error.message);
    }
  };
  deleteVenue = async ({ id }) => {
    console.log(id);
    let confirm = window.confirm("Do you want to deletes this event?");
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
        this.venues = data.map(({ id, name, campuses, seats }) => ({
          id: id,
          name: name,
          campus: campuses,
          seats: seats,
        }));
      });
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  getCampuses = async () => {
    try {
      const data = await this.venueStore.getCampuses();

      runInAction(() => {
        this.campuses = data.map(({ id, name, abbreviation }) => ({
          id: id,
          name: name,
          abbreviation: abbreviation,
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
