import { SupabaseGateway } from "../gateways/SupaBaseGateway";
import { makeAutoObservable, autorun } from "mobx";
//import { NavigationStore } from "./navigationStore";
class AnnouncementStore {
  //navigation = NavigationStore;
  announcementList = [];
  supabaseGateway = SupabaseGateway;

  constructor() {
    makeAutoObservable(this);
    //autorun(() => {this.getAnnouncements();});
  }

  getAnnouncements = async () => {
    try {
      const { error, data } =
        await this.supabaseGateway.selectFromTableWithForeignKey(
          "announcement",
          "events(id,name)"
        );
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
  makeAnnouncement = async (payload) => {
    try {
      const { error } = await this.supabaseGateway.insertToTable(
        "announcement",
        payload
      );
      if (error) throw new Error(error.message);
      alert("Announcement made");
      //this.navigation.push("/admin/announcements");
    } catch (error) {
      console.log(error.message);
    }
  };
  deleteAnnouncement = async (id) => {
    try {
      const { error } = await this.supabaseGateway.deleteFromTable(
        "announcement",
        { id: id }
      );
      if (error) throw new Error(error.message);
      alert("Announcement deleted");
    } catch (error) {
      console.log(error.message);
    } finally {
      this.getAnnouncements();
    }
  };
}
export const useAnnouncementStore = new AnnouncementStore();
