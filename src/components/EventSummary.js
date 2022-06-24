import React from "react";
import Button from "./Button";
import { Link} from 'react-router-dom'
import { UiStore } from "../stores/uiStore";
import { observer } from "mobx-react";

const EventSummary=observer(({id})=>{    
    const {setValue,event}=UiStore;

return(
    <div style={{display:event[id]?.summary?"block":"none"}}>
            <div className="activeEvent">

            </div>
            <div className="eventSummary">
                <div className="info">
                    <h1>Urban Soundscapes - Crafting Spaces of Belonging</h1>
                    <span className="eventType">Exhibition</span>
                    <span> - EVENT - </span>
                    <span>2h</span>
                    <p>
                        UJ Arts & Culture is proud to present  Urban Soundscapes - Crafting Spaces of Belonging, a Pat Mautloa solo exhibition curated by UJ Art Gallery curator, Thabo Seshoka. 
                        <br/>
                        More info to follow soon.
                    </p>
                    <div style={{display:"flex"}}>
                    
                    <Link to={"/events/"+id} >
                        <Button className="btnFullDetails" style={{width:"100px"}} text="Full Details"/>
                    </Link>
                    <Link to={"/booking/"+id} >
                        <Button className="btnBookNow" style={{width:"100px"}} text="RSPV NOW"/>
                    </Link>
                    <Button 
                        className="cancelButton" 
                        style={{width:"100px"}} 
                        onClick={()=>{
                            setValue(id);
                           
                        }} 
                        text="CANCEL"
                    />
                    </div>
                </div>
            </div>
        </div>
);
})
export default EventSummary;