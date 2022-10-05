import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { SupabaseGateway } from "../gateways/SupaBaseGateway";
import { NavigationStore } from "./navigationStore";

class UserStore {
  isLoggedIn = localStorage.getItem("@isLoggedIn") === "true";
  supabaseGateway = SupabaseGateway;
  auth = SupabaseGateway.sbClient.auth;
  navigation = NavigationStore;
  user;
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

  signUp = () => {
    try {
      const { user, error } = this.auth.signUp({
        email: this.email,
        password: this.password,
      });
      if (error) throw new Error(error.message);
      this.saveProfileData(user);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  saveProfileData = async (user) => {
    try {
      const { error, data } = await this.supabaseGateway.insertToTable(
        "users",
        user
      );
      if (error) throw new Error(error.message);
      runInAction(() => {
        this.user = { ...this.user, ...data };
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  checkUser = () => {
    if (this.user?.data[0]?.user_type === 1)
      this.navigation.push("/admin/cash-booking");
    else if (this.user?.data[0]?.user_type === 2)
      this.navigation.push("/admin/finance");
    else this.navigation.push("/admin/venues");
  };
  login = async (email, password) => {
    try {
      const { user, error } = await this.auth.signIn({
        email,
        password,
      });
      if (error) throw new Error(error.message);
      const { data } = await this.supabaseGateway.getUserData({
        uuid: user.id,
      });
      runInAction(() => {
        this.user = { ...user, data };
      });
      console.log(this.user.data[0]);
      if (this.user?.data[0]?.user_type === 1)
        this.navigation.push("/admin/cash-booking");
      else if (this.user?.data[0]?.user_type === 2)
        this.navigation.push("/admin/finance");
      else this.navigation.push("/admin/venues");

      this.setIsLoggedIn();
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
export const useUserStore = new UserStore();
