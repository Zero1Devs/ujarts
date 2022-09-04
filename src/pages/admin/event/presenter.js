import { makeAutoObservable, autorun, runInAction } from "mobx";
import { useEventStore } from "../../../stores/eventStore";

class EventPresenter {
  eventStore = useEventStore;
  active = 0;
  events = [];
  eventType = "";
  eventTypes = {
    id: new Int32Array(),
    name: String(),
  };
  runningEvents = [];
  upcomingEvents = [];
  constructor() {
    makeAutoObservable(this);
    autorun(() => {
      this.getEvents();
      this.getEventTypes();
    });
  }
  setFilterValue = (e) => {
    this[e.target.name] = e.target.value;
    console.log(this[e.target.name]);
  };
  setActive = (id) => {
    for (var i = 0; i < this.events.length; i++) {
      if (i !== id) {
        this.events[i].active = false;
      }
    }
    this.active = id;
    this.events[id].active = !this.events[id].active;
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
            active: false,
            sold: Math.floor(
              Math.random() * (Math.floor(100) - Math.ceil(0)) + Math.ceil(0)
            ),
          })
        );
      });
      //    console.log(this.events);
    } catch (error) {
      console.log(error.message);
    }
  };
  getRunningEvents = async () => {
    try {
      const data = await this.eventStore.getRunningEvents();

      runInAction(() => {
        this.runningEvents = data.map(
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
      });
      //    console.log(this.events);
    } catch (error) {
      console.log(error.message);
    }
  };
  getUpcomingEvents = async () => {
    try {
      const data = await this.eventStore.getUpcomingEvents();

      runInAction(() => {
        this.upcomingEvents = data.map(
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
      });
      //    console.log(this.events);
    } catch (error) {
      console.log(error.message);
    }
  };
}
export const useEventPresenter = new EventPresenter();
