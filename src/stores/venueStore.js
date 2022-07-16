import { makeAutoObservable } from "mobx";
import { SupabaseGateway } from "../gateways/SupaBaseGateway";
import { NavigationStore } from "./navigationStore";

class VenueStore {
  supabaseGateway = SupabaseGateway;
  navigation = NavigationStore;
  venue = { name: String(), address: String(), seats: new Int32Array() };
  constructor() {
    makeAutoObservable(this);
  }
  createVenue = async (venue) => {
    try {
      const { error } = await this.supabaseGateway.insertToTable(
        "venues",
        venue
      );
      if (error) throw new Error(error.message);
      alert("Venue created!");
      this.navigation.push("/admin/venues");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };
  /**/ getVenues = async () => {
    try {
      const { error, data } =
        await this.supabaseGateway.selectFromTableWithForeignKey(
          "venues",
          " campuses(id,abbreviation)"
        );

      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
  updateVenue = async (venue) => {
    try {
      const { error, data } = await this.supabaseGateway.updateTable(
        "venues",
        venue,
        {
          id: venue.id,
        }
      );
      if (error) throw new Error(error.message);
      alert("Venue updated!");
      this.navigation.push("/admin/venues");
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  deleteVenue = async (id) => {
    try {
      const { error } = await this.supabaseGateway.deleteFromTable("venues", {
        id: id,
      });
      if (error) throw new Error(error.message);
    } catch (error) {
      console.log(error.message);
    }
  };
  getCampuses = async () => {
    try {
      const { data, error } = await this.supabaseGateway.selectFromTable(
        "campuses"
      );
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
}
export const useVenueStore = new VenueStore();
