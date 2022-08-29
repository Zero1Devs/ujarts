import { makeAutoObservable, autorun, runInAction } from "mobx";
import { useEventStore } from "../../../stores/eventStore";

class EventPresenter {
  eventStore = useEventStore;
  active = 0;
  events = [];

  constructor() {
    makeAutoObservable(this);
    autorun(() => {
      this.getEvents();
      this.getEventTypes();
    });
  }

  get eventTypes() {
    return this.eventStore.eventTypes;
  }
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

      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  getEvents = async () => {
    try {
      const data = await this.eventStore.getEvents();

      runInAction(() => {
        this.events = data.map(
          ({ id, name, description, state, host, venues, event_types }) => ({
            id,
            name,
            description,
            state,
            host,
            venues,
            event_types,
            active: false,
          })
        );
      });
      console.log(this.events);
    } catch (error) {
      console.log(error.message);
    }
  };
}
export const useEventPresenter = new EventPresenter();
