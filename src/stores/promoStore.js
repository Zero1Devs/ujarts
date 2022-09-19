import { SupabaseGateway } from "../gateways/SupaBaseGateway";
import { makeAutoObservable, runInAction, autorun } from "mobx";

class PromoStore {
  promoList = [];
  supabaseGateway = SupabaseGateway;

  constructor() {
    makeAutoObservable(this);
  }

  getPromos = async () => {
    try {
      const { data, error } =
        await this.supabaseGateway.selectFromTableWithForeignKey(
          "promos",
          "events(name)"
        );
      if (error) throw new Error(error.message);
      runInAction(() => {
        this.promoList = data;
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  addPromo = async (payload) => {
    try {
      const { data, error } = await this.supabaseGateway.insertToTable(
        "promos",
        payload
      );
      if (error) throw new Error(error.message);
      alert("Promo created");
    } catch (error) {
      console.log(error.message);
    }
  };
  updatePromo = async (payload, id) => {
    try {
      const { error } = await this.supabaseGateway.updateTable(
        "promos",
        payload,
        { id: id }
      );
      if (error) throw new Error(error.message);
      alert("Promo updated");
    } catch (error) {
      console.log(error.message);
    } finally {
      this.getPromos();
    }
  };
  deletePromo = async (id) => {
    try {
      const { error } = await this.supabaseGateway.deleteFromTable("promos", {
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
}
export const usePromoStore = new PromoStore();
