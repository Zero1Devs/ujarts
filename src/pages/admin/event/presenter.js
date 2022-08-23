import { makeAutoObservable, autorun } from "mobx";
import { useEventStore } from "../../../stores/eventStore";

class EventPresenter {
  eventStore = useEventStore;
  active = 0;

  event = [
    {
      id: 1,
      name: "Urban Soundscapes- Crafting Spaces of Belonging",
      type: "Exhibition",
      summary:
        "UJ Arts & Culture is proud to present  Urban Soundscapes - Crafting Spaces of Belonging, a Pat Mautloa solo exhibition curated by UJ Art Gallery curator, Thabo Seshoka.\nMore info soon.",
      dates: "20-8-2022 to 29-8-2022",
      active: false,
    },
    {
      id: 2,
      name: "LEARN: an ArtMuch Podcast",
      type: "Podcast",
      summary:
        "Welcome to UJ Arts & Culture’s Educational Podcast Channel: LEARN for high school students. This season features isiZulu and English adaptations of ‘R&J Unplugged’, Robin Malan’s adaptation of Shakespeare’s ‘Romeo and Juliet’. The play was translated and edited by Nkululeko Ndhlovu in partnership with Nomusa Sibiya at UJ’s Multilingual Language Services at UJ.Recorded by UJ Arts Academy students under direction",
      dates: "20-8-2022 to 29-8-2022",
      active: false,
    },
    {
      id: 3,
      name: "Urban Soundscapes- Crafting Spaces of Belonging",
      type: "Exhibition",
      summary:
        "UJ Arts & Culture is proud to present  Urban Soundscapes - Crafting Spaces of Belonging, a Pat Mautloa solo exhibition curated by UJ Art Gallery curator, Thabo Seshoka.\nMore info soon.",
      dates: "20-8-2022 to 29-8-2022",
      active: false,
    },
    {
      id: 4,
      name: "LEARN: an ArtMuch Podcast",
      type: "Podcast",
      summary:
        "Welcome to UJ Arts & Culture’s Educational Podcast Channel: LEARN for high school students. This season features isiZulu and English adaptations of ‘R&J Unplugged’, Robin Malan’s adaptation of Shakespeare’s ‘Romeo and Juliet’. The play was translated and edited by Nkululeko Ndhlovu in partnership with Nomusa Sibiya at UJ’s Multilingual Language Services at UJ.Recorded by UJ Arts Academy students under direction",
      dates: "20-8-2022 to 29-8-2022",
      active: false,
    },
  ];
  constructor() {
    makeAutoObservable(this);
    autorun(() => this.getEventTypes());
  }

  get eventTypes() {
    return this.eventStore.eventTypes;
  }
  setActive = (id) => {
    for (var i = 0; i < this.event.length; i++) {
      if (i !== id) {
        this.event[i].active = false;
      }
    }
    this.active = id;
    this.event[id].active = !this.event[id].active;
  };
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
