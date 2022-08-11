import { SupabaseGateway } from "../gateways/SupaBaseGateway";
import { makeAutoObservable, runInAction } from "mobx";

class EventStore {
  supabaseGateway = SupabaseGateway;

  constructor() {
    makeAutoObservable(this);
  }
  event = {
    id: new Int32Array(),
    name: String(),
    campus: new Int32Array(),
    seats: new Int32Array(),
  };
  eventTypes = {
    id: new Int32Array(),
    name: String(),
  };
  createEvent = async (event) => {
    try {
      const { error } = await this.supabaseGateway.insertToTable(
        "events",
        event
      );
      if (error) throw new Error(error.message);
      alert("Event created!");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };
  getEventTypes = async () => {
    try {
      const { error, data } = await this.supabaseGateway.selectFromTable(
        "event_types"
      );

      if (error) throw new Error(error.message);
      runInAction(() => {
        this.eventTypes = data.map(({ id, description }) => ({
          id: id,
          name: description,
        }));
      });
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
}
export const useEventStore = new EventStore();
