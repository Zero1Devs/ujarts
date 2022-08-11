import { makeAutoObservable, autorun } from "mobx";
import { useEventStore } from "../../../stores/eventStore";

class EventPresenter {
  eventStore = useEventStore;
  constructor() {
    makeAutoObservable(this);
    autorun(() => this.getEventTypes());
  }

  get eventTypes() {
    return this.eventStore.eventTypes;
  }
  getEventTypes = async () => {
    try {
      const data = await this.eventStore.getEventTypes();

      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
}
export const useEventPresenter = new EventPresenter();
