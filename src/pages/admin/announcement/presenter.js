import { makeAutoObservable } from "mobx";
import { useAnnouncementStore } from "../../../stores/announcementStore";

class AnnouncementPresenter {
  announcementStore = useAnnouncementStore;
  message = "";
  subject = "";
  event_id = "";
  id = "";

  constructor() {
    makeAutoObservable(this);
  }
  get announcementList() {
    return this.announcementStore.announcementList;
  }
  setFormValue = (e) => {
    this[e.target.name] = e.target.value;
  };
  makeAnnouncement = async () => {
    try {
      await this.announcementStore.makeAnnouncement({
        message: this.message,
        subject: this.subject,
        event_id: this.event_id,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  deleteAnnouncement = async (id) => {
    try {
      await this.announcementStore.deleteAnnouncement(id);
    } catch (error) {
      console.log(error.message);
    }
  };
}
export const useAnnouncementPresenter = new AnnouncementPresenter();
