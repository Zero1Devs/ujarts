import { makeAutoObservable, autorun, runInAction } from "mobx";
import { useEventStore } from "../../../stores/eventStore";
import { SupabaseGateway } from "../../../gateways/SupaBaseGateway";
class EventPresenter {
  eventStore = useEventStore;
  supabaseGateway = SupabaseGateway;
  active = 0;
  eventType = "";
  /*  eventTypes = {
    id: new Int32Array(),
    name: String(),
  };*/
  event = {
    name: "",
    host: "",
    description: "",
    thumbnail: "",
    price: 0,
    venue: 1,
    type: 1,
    date: "",
    start_time: "",
    end_time: "",
    no_tickets: 0,
  };
  schedule = { date: "", start_time: "", end_time: "" };
  runningEvents = [];
  upcomingEvents = [];
  constructor() {
    makeAutoObservable(this);
    autorun(() => {
      this.eventStore.getGridEvents();
    });
  }
  setFormValue = (e) => {
    if (e.target.name === "thumbnail")
      this.event[e.target.name] = e.target.files[0];
    else this.event[e.target.name] = e.target.value;
  };
  setFilterValue = (e) => {
    this[e.target.name] = e.target.value;
    console.log(e.target.value);
    if (e.target.value === 0) {
      this.eventStore.getGridEvents();
    } else {
      this.eventStore.getGridEventsByType(e.target.value);
      console.log(this.eventStore.gridEvents);
    }
  };
  setActive = (id) => {
    for (var i = 0; i < this.gridEvents.length; i++) {
      if (i !== id) {
        this.gridEvents[i].active = false;
      }
    }
    this.active = id;
    this.gridEvents[id].active = !this.gridEvents[id].active;
  };
  createEvent = async () => {
    try {
      console.log(this.event);
      let {
        name,
        description,
        host,
        thumbnail,
        type,
        venue,
        date,
        end_time,
        start_time,
        no_tickets,
        price,
      } = this.event;

      const file = thumbnail;
      const fileExt = file.name.split(".").pop();
      const fileName = `${file.name.split(".")[0]}${Math.floor(
        Math.random() * 1000
      )}.${fileExt}`;
      const event = await this.eventStore.createEvent({
        name,
        description,
        host,
        thumbnail: fileName,
        id_type: type,
        price,
        id_venue: venue,
      });
      await this.eventStore.addSchedule({
        event_id: event[0]?.id,
        date,
        start_time,
        end_time,
        available_seats: no_tickets,
      });

      const { data, error } = await this.supabaseGateway.uploadPhoto(
        fileName,
        file
      );

      if (error) throw new Error(error.message);
      console.log(data);
      alert("Event created");
    } catch (error) {
      console.log(error.message);
    }
  };
  deleteEvent = async (id) => {
    try {
      //  await this.eventStore.deleteEvent(id);
      alert("Event was deleted");
    } catch (error) {
      console.log(error.message);
    }
  };
  getEventTypes = async () => {
    try {
      const data = await this.eventStore.getEventTypes();
      runInAction(() => {
        this.eventTypes = data.map(({ id, type }) => ({
          id: id,
          name: type,
        }));
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  getEvents = async () => {
    try {
      const data = await this.eventStore.getEvents();

      /*  runInAction(() => {
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
            active: false,
            sold: Math.floor(
              Math.random() * (Math.floor(100) - Math.ceil(0)) + Math.ceil(0)
            ),
          })
        );
      });*/
    } catch (error) {
      console.log(error.message);
    }
  };
  get gridEvents() {
    return this.eventStore.gridEvents;
  }
  get events() {
    return this.eventStore.events;
  }
  get eventTypes() {
    return this.eventStore.eventTypes;
  }
  getRunningEvents = async () => {
    try {
      await this.eventStore.getRunningEvents();
    } catch (error) {
      console.log(error.message);
    }
  };
  getUpcomingEvents = async () => {
    try {
      await this.eventStore.getUpcomingEvents();

      //    console.log(this.events);
    } catch (error) {
      console.log(error.message);
    }
  };
}
export const useEventPresenter = new EventPresenter();
