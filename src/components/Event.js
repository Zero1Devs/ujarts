import React from "react";
import '../App.css';
import thumbnail from '../assets/thumbnail.jpg';
import {Calendar,MapPin,Users} from "react-feather";
import Button from "./Button";
import { Link } from 'react-router-dom';
import { useState } from "react";
const Event=(props)=>{
    const [showDetails,setShowDetails]= useState(false);
    return(
        <div>
            <div className="eventCard">
            <div className="thumbnail">
                <img alt="Event" src={thumbnail}/>
                <span className="eventType">Exhibition</span>
            </div>
            <div className="eventInfo">
                <label className="eventName"  title="Event Name">Urban Soundscapes- Crafting Spaces of Belonging</label>
                
                <label className="" title="Venue">
                    <MapPin size="23" color="#f25622"/>
                    <span>Kingsway Campus A1</span>
                </label>

                <label  title="Date">
                    <Calendar size="23" color="#f25622"/>
                    <span>11/06/2022 to 30/08/2022</span>
                </label>
                
                <label  title="Presented by">
                    <Users size="23" color="#f25622"/>
                    <span>UJ Arts Gallery</span>
                </label>
            </div>
            
            <div style={{display:"flex"}}>
                <Link className="btnFullDetails" to={"/events/"+props.id}>
                    <label>Full Details</label>
                </Link>
                <Button className="btnBookNow" text="Book Now" onClick={()=>setShowDetails(!showDetails)}/>
            </div>
            
        </div>
       
        {showDetails &&
        <div>
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
                    <div style={{display:"flex",width:"20%"}}>
                    <Button className="btnBookNow" text="RSPV NOW"/>
                    <Button className="cancelButton" text="CANCEL"/>
                    </div>
                </div>
            </div>
        </div>
        }
        </div>
        
        
    );
}
export default Event;