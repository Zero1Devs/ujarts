import { makeAutoObservable } from "mobx";
import { SupabaseGateway } from "../gateways/SupaBaseGateway";

class VenueStore {
  supabaseGateway = SupabaseGateway;
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
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };
  updateVenue = async (id) => {
    try {
      const { error } = await this.supabaseGateway.updateTable(
        "venues",
        this.venue,
        {
          id: id,
        }
      );
      if (error) throw new Error(error.message);
      alert("Venue updated!");
    } catch (error) {
      console.log(error.message);
    }
  };
  deleteVenue = async (table, id) => {
    try {
      const { error } = await this.supabaseGateway.deleteFromTable(table, {
        id: id,
      });
      if (error) throw new Error(error.message);
    } catch (error) {
      console.log(error.message);
    }
  };
}
export const useVenueStore = new VenueStore();
