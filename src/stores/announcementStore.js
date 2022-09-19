import { SupabaseGateway } from "../gateways/SupaBaseGateway";
import { makeAutoObservable, runInAction, autorun } from "mobx";

class AnnouncementStore {
  announcementList = [];
  supabaseGateway = SupabaseGateway;

  constructor() {
    makeAutoObservable(this);
    autorun(() => {
      this.getAnnouncements();
    });
  }

  getAnnouncements = async () => {
    try {
      const { data, error } =
        await this.supabaseGateway.selectFromTableWithForeignKey(
          "announcements",
          "events(name)"
        );
      if (error) throw new Error(error.message);
      runInAction(() => {
        this.announcementList = data;
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  makeAnnouncement = async (payload) => {
    try {
      const { data, error } = await this.supabaseGateway.insertToTable(
        "announcements",
        payload
      );
      if (error) throw new Error(error.message);
      alert("Announcement made");
    } catch (error) {
      console.log(error.message);
    }
  };
  deleteAnnouncement = async (id) => {
    try {
      const { data, error } = await this.supabaseGateway.deleteFromTable(
        "announcements",
        { id: id }
      );
      if (error) throw new Error(error.message);
      alert("Announcement deleted");
    } catch (error) {
      console.log(error.message);
    }
  };
}
export const useAnnouncementStore = new AnnouncementStore();
