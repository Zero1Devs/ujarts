import { makeAutoObservable, autorun, runInAction } from "mobx";
import { useEventStore } from "../../../stores/eventStore";

class EventPresenter {
  eventStore = useEventStore;
  active = 0;
  eventType = "";
/*  eventTypes = {
    id: new Int32Array(),
    name: String(),
  };*/
  runningEvents = [];
  upcomingEvents = [];
  constructor() {
    makeAutoObservable(this);
    autorun(() => {
      this.getEvents();
      this.eventStore.getGridEvents();
    });
  }
  setFilterValue = (e) => {
    this[e.target.name] = e.target.value;
    console.log(this[e.target.name]);
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

      /* runInAction(() => {
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
      });*/
      //    console.log(this.events);
    } catch (error) {
      console.log(error.message);
    }
  };
  getUpcomingEvents = async () => {
    try {
      const data = await this.eventStore.getUpcomingEvents();

      //    console.log(this.events);
    } catch (error) {
      console.log(error.message);
    }
  };
}
export const useEventPresenter = new EventPresenter();
