import { makeAutoObservable } from "mobx";
import { usePromoStore } from "../../../stores/promoStore";
class PromoPresenter {
  promoStore = usePromoStore;
  event_id = "";
  percentage = "";
  code = "";
  id = "";
  constructor() {
    makeAutoObservable(this);
  }
  setFormValue = (e) => {
    this[e.target.name] = e.target.value;
  };
  addPromo = async () => {
    try {
      await this.promoStore.addPromo({
        promo_code: this.code,
        discount: this.percentage / 100,
        event_id: this.event_id,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  deletePromo = async () => {
    try {
      await this.promoStore.deletePromo(id);
    } catch (error) {
      console.log(error.message);
    }
  };
  updatePromo = async () => {
    try {
      await this.promoStore.updatePromo(
        {
          promo_code: this.code,
          discount: this.percentage / 100,
          event_id: this.event,
        },
        id
      );
    } catch (error) {
      console.log(error.message);
    }
  };
}
export const usePromoStore = new PromoPresenter();
