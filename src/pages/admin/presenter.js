import { SupabaseGateway } from "../../gateways/SupaBaseGateway";
import { makeAutoObservable } from "mobx";
import { NavigationStore } from "../../stores/navigationStore";
import { UserStore } from "../../stores/userStore";

class AdminPresenter {
  auth = SupabaseGateway.sbClient.auth;
  userStore = UserStore;
  name = "";
  surname = "";
  email = "";
  password = "";
  navigation = NavigationStore;
  constructor() {
    makeAutoObservable(this);
  }

  get user() {
    return this.userStore.user;
  }
  setFormValue = (e) => {
    this[e.target.name] = e.target.value;
    console.log(this[e.target.name]);
  };

  signUp = () => {
    try {
      const { user, error } = this.auth.signUp({
        email: this.email,
        password: this.password,
      });
      if (error) throw new Error(error.message);
      console.log(user);

      this.userStore.saveProfileData({
        id: user.uuid,
        name: this.name,
        surname: this.surname,
        user_type: 3,
        created_at: user.created_at,
      });
    } catch (error) {
      console.log(error);
    }
  };
  login = async () => {
    try {
      await this.userStore.login(this.email, this.password);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };
  logout = async () => {
    try {
      await this.userStore.logout();
    } catch (error) {
      console.log(error.message);
    }
  };
  resetPassword = () => {
    try {
      this.auth.api.resetPasswordForEmail(this.email);
    } catch (error) {}
  };
}
export const useAdminPresenter = new AdminPresenter();
