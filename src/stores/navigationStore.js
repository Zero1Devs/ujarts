import { makeAutoObservable } from "mobx"
import {createBrowserHistory} from "history";

class Navigation{
    history= createBrowserHistory();

    constructor(){
        makeAutoObservable(this);
    }

    push = (path) => {
        this.history.push(path);
      };
    
    replace = (path, state) => {
      this.history.replace(path,state);
    };
  
    go = (n) => {
      this.history.go(n);
    };
  
    goBack = () => {
      this.history.goBack();
    };
  
    goForward = () => {
      this.history.goForward();
    };
    

}
export const NavigationStore=new Navigation();