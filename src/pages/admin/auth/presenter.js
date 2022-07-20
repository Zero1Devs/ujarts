import { SupabaseGateway } from "../../../gateways/SupaBaseGateway";
import { makeAutoObservable } from "mobx";
import { NavigationStore } from "../../../stores/navigationStore";
import { UserStore } from "../../../stores/userStore";

class AdminPresenter {
  auth = SupabaseGateway.sbClient.auth;
  userStore = UserStore;
  name = "";
  surname = "";
  email = "";
  password = "";
  confirm_password = "";
  error = false;
  loading = false;
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

  clearFields = () => {
    this.name = "";
    this.surname = "";
    this.email = "";
    this.password = "";
    this.confirm_password = "";
  };
  signUp = async () => {
    try {
      this.loading = true;
      if (this.password !== this.confirm_password) {
        this.error = true;
        return;
      }
      this.error = false;

      const { user, session, error } = await this.auth.signUp({
        email: this.email,
        password: this.password,
      });
      if (error) throw new Error(error.message);

      console.log(user);
      console.log(session);
      const data = await this.userStore.saveProfileData({
        uuid: user.id,
        name: this.name,
        surname: this.surname,
        user_type: 3,
        is_active: true,
      });
      console.log(data);

      alert("Check your mailbox and confirm your email.\nThen you may login");
      this.clearFields();
      this.navigation.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  };
  login = async () => {
    try {
      this.loading = true;
      await this.userStore.login(this.email, this.password);
      this.clearFields();
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    } finally {
      this.loading = false;
    }
  };
  saveProfileData = async () => {
    try {
      const { user } = this.auth.session();
      await this.userStore.saveProfileData({
        uuid: user.id,
        name: this.name,
        surname: this.surname,
        user_type: 3,
        created_at: user.created_at,
      });
    } catch (error) {
      console.log(error);
    }
  };
  logout = async () => {
    try {
      let confirm = window.confirm("Do you want to logout?");
      if (confirm) await this.userStore.logout();
    } catch (error) {
      console.log(error.message);
    }
  };
  sendResetPasswordEmail = () => {
    try {
      this.loading = true;

      const { error } = this.auth.api.resetPasswordForEmail(this.email);
      if (error) throw new Error(error.message);
    } catch (error) {
      console.log(error.message);
    } finally {
      this.loading = false;
    }
  };
  resetPassword = () => {
    try {
      this.loading = true;
      if (this.password !== this.confirm_password) {
        this.error = true;
        return;
      }
      this.error = false;
      let access_token = this.auth.session().access_token;
      const { error } = this.auth.api.updateUser(access_token, {
        password: this.password,
      });
      if (error) throw new Error(error.message);
      alert("Password updated");
      this.navigation.push("/admin/login");
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    } finally {
      this.loading = false;
    }
  };
}
export const useAdminPresenter = new AdminPresenter();
