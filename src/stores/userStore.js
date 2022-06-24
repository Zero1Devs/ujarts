import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { SupabaseGateway } from "../gateways/SupaBaseGateway";
import { Navigation } from "./navigationStore";

class userStore {
  userprofile = { email: "viv", password: "" };
  isLoggedIn = localStorage.getItem("@isLoggedIn") === "true";
  auth = SupabaseGateway.sbClient.auth;
  navigation = Navigation;
  
  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "@user",
      properties: ["user"],
      storage: window.localStorage,
    });
  }
  init = async () => {
    const session = this.auth.session();
    this.isLoggedIn = !!session?.access_token;
    localStorage.setItem("@isLoggedIn", `${!!session?.access_token}`);
  };

  setIsLoggedIn = () => {
    this.isLoggedIn = true;
    localStorage.setItem("@isLoggedIn", `true`);
  };
  setIsLoggedOut = () => {
    this.isLoggedIn = false;
    localStorage.setItem("@isLoggedIn", `false`);
  };

  login = async (email, password) => {
    try {
      const { user, error } = await this.auth.signIn({
        email,
        password,
      });
      if (error) throw new Error(error.message);
      console.log(user);
      this.user = user;
      this.setIsLoggedIn();
      this.navigation.push("/admin/index");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  logout = async () => {
    try {
      const { error } = await this.auth.signOut();
      this.navigation.push("/admin/login");
      if (error) throw new Error(error.message);
      this.setIsLoggedOut();
    } catch (error) {
      alert(error.message);
    }
  };

  sendResetPasswordEmail = async (email) => {
    try {
      const { error } = await this.auth.api.resetPasswordForEmail(email);
      if (error) throw new Error(error.message);
    } catch (error) {
      alert(error.message);
    }
  };

  updateUser = async (payload) => {
    try {
      const { error } = await this.auth.update(payload);
      if (error) throw new Error(error.message);
    } catch (error) {
      alert(error.message);
    }
  };
}
export const UserStore = new userStore();
