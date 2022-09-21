import { makeAutoObservable, runInAction, autorun } from "mobx";
import { usePromoStore } from "../../../stores/promoStore";
class PromoPresenter {
  promo = {
    id: new Int32Array(),
    promo_code: String(),
    discount: new Float32Array(),
    event: new Int32Array(),
  };
  promoStore = usePromoStore;
  event_id = "";
  discount = "";
  promo_code = "";
  promos = [];
  id = "";
  events = [];

  constructor() {
    makeAutoObservable(this);
    autorun(() => this.getPromos());
  }
  setFormValue = (e) => {
    this.promo[e.target.name] = e.target.value;
  };
  getPromo = async () => {
    try {
      const data = await this.promoStore.getPromos();

      runInAction(() => {
        this.promos = data.map(({ id, promo_code, discount, events }) => ({
          id: id,
          promo_code: promo_code,
          discount: discount,
          event: events,
        }));
      });
      //console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  createPromo = async () => {
    try {
      const { promo_code, event, discount } = this.promo;
      let promo = { promo_code, event_id: event, discount };
      console.log(promo);
      await this.promoStore.addPromo(promo);
    } catch (error) {
      console.log(error.message);
    }
  };
  deletePromo = async ({ id }) => {
    console.log(id);
    let confirm = window.confirm("Do you want to delete this Promo?");
    if (confirm) {
      try {
        await this.promoStore.deletePromo(id);
        await this.getPromo();
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  updatePromo = async () => {
    try {
      const { id, name, event, discount } = this.promo;
      let promo = { id, name, event_id: event, discount };
      await this.promoStore.updatePromo(promo);
    } catch (error) {
      console.log(error.message);
    }
  };
  getEvents = async () => {
    try {
      const data = await this.promoStore.getEvents();

      runInAction(() => {
        this.events = data.map(({ id, name }) => ({
          id: id,
          name: name,
        }));
      });
      //  console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
}

export const usePromoPresenter = new PromoPresenter();
