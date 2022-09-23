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
  events = [];
  upcomingEvents = [];
  runningEvents = [];
  constructor() {
    makeAutoObservable(this);
    autorun(() => {
      this.getEventTypes();
    });
  }
  createEvent = async (event) => {
    try {
      const { data, error } = await this.supabaseGateway.insertToTable(
        "events",
        event
      );
      if (error) throw new Error(error.message);
      alert("Event created!");
      return data;
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };
  deleteEvent = async (id) => {
    try {
      const { error } = await this.supabaseGateway.deleteFromTable("events", {
        id: id,
      });
      if (error) throw new Error(error.message);
    } catch (error) {
      console.log(error.message);
    }
  };
  addSchedule = async (payload) => {
    try {
      const { data, error } = await this.supabaseGateway.insertToTable(
        "schedule",
        payload
      );
      if (error) throw new Error(error.message);
      return data;
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
        await this.supabaseGateway.selectFromTableWithForeignKey2(
          "events",
          "event_types(id,type), venues(name)"
        );
      if (error) throw new Error(error.message);
      runInAction(() => {
        this.events = data.map(
          ({
            id,
            name,
            description,
            state,
            host,
            thumbnail,
            venues,
            event_types,
          }) => ({
            id,
            name,
            description,
            state,
            thumbnail,
            host,
            venues,
            event_types,
            sold: Math.floor(
              Math.random() * (Math.floor(100) - Math.ceil(0)) + Math.ceil(0)
            ),
          })
        );
      });
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
  getGridEvents = async () => {
    try {
      const { data, error } = await this.supabaseGateway.selectGridEvents();

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
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
  getGridEventsByType = async (type) => {
    try {
      if (type === 0) {
        await this.getGridEvents();
      } else {
        const { data, error } =
          await this.supabaseGateway.selectGridEventsByType(type);

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
        return data;
      }
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
      runInAction(() => {
        this.events = data.map(
          ({
            id,
            name,
            description,
            state,
            host,
            thumbnail,
            venues,
            event_types,
          }) => ({
            id,
            name,
            description,
            state,
            thumbnail,
            host,
            venues,
            event_types,
            sold: Math.floor(
              Math.random() * (Math.floor(100) - Math.ceil(0)) + Math.ceil(0)
            ),
          })
        );
      });
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
      runInAction(() => {
        this.events = data.map(
          ({
            id,
            name,
            description,
            state,
            host,
            thumbnail,
            venues,
            event_types,
          }) => ({
            id,
            name,
            description,
            state,
            thumbnail,
            host,
            venues,
            event_types,
          })
        );
      });
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
}
export const useEventStore = new EventStore();
