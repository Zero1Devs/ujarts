import { makeAutoObservable } from "mobx";

class uiStore {
  constructor() {
    makeAutoObservable(this);
  }
}
export const UiStore = new uiStore();
