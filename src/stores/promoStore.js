import { SupabaseGateway } from "../gateways/SupaBaseGateway";
import { makeAutoObservable } from "mobx";

class PromoStore {
  promoList = [];
  supabaseGateway = SupabaseGateway;

  constructor() {
    makeAutoObservable(this);
  }

  getPromos = async () => {
    try {
      const { error, data } =
        await this.supabaseGateway.selectFromTableWithForeignKey(
          "promo",
          "events(id,name)"
        );

      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
  addPromo = async (payload) => {
    try {
      const { error } = await this.supabaseGateway.insertToTable(
        "promo",
        payload
      );
      if (error) throw new Error(error.message);
      alert("Promo created");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };
  updatePromo = async (promo) => {
    try {
      const { error, data } = await this.supabaseGateway.updateTable(
        "promo",
        promo,
        {
          id: promo.id,
        }
      );
      if (error) throw new Error(error.message);
      alert("Promo updated!");
      this.navigation.push("/admin/promo");
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  deletePromo = async (id) => {
    try {
      const { error } = await this.supabaseGateway.deleteFromTable("promo", {
        id: id,
      });
      if (error) throw new Error(error.message);
      alert("Promo deleted");
    } catch (error) {
      console.log(error.message);
    } finally {
      this.getPromos();
    }
  };
  getEvents = async () => {
    try {
      const { data, error } = await this.supabaseGateway.selectFromTable(
        "events"
      );
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
}
export const usePromoStore = new PromoStore();
