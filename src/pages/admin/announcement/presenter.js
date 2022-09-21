import { autorun, makeAutoObservable, runInAction } from "mobx";
import { useAnnouncementStore } from "../../../stores/announcementStore";
import { NavigationStore } from "../../../stores/navigationStore";

class AnnouncementPresenter {
  announcement = {
    id: new Int32Array(),
    subject: String(),
    message: String(),
    event: new Int32Array(),
  };
  announcementStore = useAnnouncementStore;
  message = "";
  subject = "";
  event_id = "";
  navigation = NavigationStore;
  id = "";
  announcements = [];

  constructor() {
    makeAutoObservable(this);
    autorun(() => this.getAnnouncementList);
  }
  getAnnouncementList = async () => {
    try {
      const data = await this.announcementStore.getAnnouncements();

      runInAction(() => {
        this.announcements = data.map(
          ({ id, created_at, subject, message, events }) => ({
            id: id,
            subject: subject,
            message: message,
            event: events,
            date: created_at,
          })
        );
      });
      //console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  setFormValue = (e) => {
    this.announcement[e.target.name] = e.target.value;
  };
  makeAnnouncement = async () => {
    try {
      const { subject, event, message } = this.announcement;
      let announcement = { subject, event_id: event, message };
      console.log(announcement);
      await this.announcementStore.makeAnnouncement(announcement);
      this.navigation.push("/admin/annoucenments");
    } catch (error) {
      console.log(error.message);
    }
  };
  deleteAnnouncement = async ({ id }) => {
    console.log(id);
    let confirm = window.confirm("Do you want to delete this Announcement?");
    if (confirm) {
      try {
        await this.announcementStore.deleteAnnouncement(id);
        await this.getAnnouncementList();
      } catch (error) {
        console.log(error.message);
      }
    }
  };
}
export const useAnnouncementPresenter = new AnnouncementPresenter();
