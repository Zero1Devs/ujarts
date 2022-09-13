import { SupabaseGateway } from "../gateways/SupaBaseGateway";
import { makeAutoObservable, runInAction, autorun } from "mobx";

class EventStore {
  supabaseGateway = SupabaseGateway;

  event = {
    id: new Int32Array(),
    name: String(),
    campus: new Int32Array(),
    seats: new Int32Array(),
  };
  gridEvents = [];
  eventTypes = {
    id: new Int32Array(),
    name: String(),
  };
  constructor() {
    makeAutoObservable(this);
    autorun(() => {
      this.getEventTypes();
    });
  }
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
        this.eventTypes = data.map(({ id, type }) => ({
          id: id,
          name: type,
        }));
      });
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
  getEvents = async () => {
    try {
      const { data, error } =
        await this.supabaseGateway.selectFromTableWithForeignKey(
          "events",
          "event_types(id,type), venues(name)"
        );

      //  console.log(this.events);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
  getGridEvents = async () => {
    try {
      const { data, error } = await this.supabaseGateway.selectGridEvents(
        "events",
        "event_types(id,type), venues(name),schedule(event_id,*)"
      );
      /*
         "schedule",
        "events(*,event_types(id,type), venues(name))"
       */
      if (error) throw new Error(error.message);

      runInAction(() => {
        this.gridEvents = data
          .filter((events) => events.schedule.length > 0)
          .map(
            ({
              id,
              name,
              description,
              state,
              host,
              thumbnail,
              venues,
              event_types,
              schedule,
            }) => ({
              id,
              name,
              description,
              state,
              thumbnail,
              host,
              venues,
              event_types,
              schedule,
              active: false,
            })
          );
      });
      //  console.log(this.events);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
  getRunningEvents = async () => {
    try {
      const { data, error } =
        await this.supabaseGateway.selectFromTableWithForeignKeyFilter(
          "events",
          "event_types(id,type), venues(name)",
          { column: "state", value: "running" }
        );
      if (error) throw new Error(error.message);
      //  console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
  getUpcomingEvents = async () => {
    try {
      const { data, error } =
        await this.supabaseGateway.selectFromTableWithForeignKeyFilter(
          "events",
          "event_types(id,type), venues(name)",
          { column: "state", value: "upcoming" }
        );
      if (error) throw new Error(error.message);
      //  console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
}
export const useEventStore = new EventStore();
