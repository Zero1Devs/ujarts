import { makeAutoObservable } from "mobx"

class uiStore{
    
    event=[{summary:false},{summary:false},{summary:false},{summary:false},{summary:false}]
    constructor(){
        makeAutoObservable(this);
    }
    setValue=(id)=>{
        for(var i=0;i<this.event.length;i++){
            if(i!=id){
                this.event[i].summary=false;
            }
        }
        this.event[id].summary=!this.event[id].summary;
    }


}
export const UiStore= new uiStore;
