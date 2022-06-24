import React from "react";
import '../styles/index.css';
import '../styles/customerLayout.css';
import Event from "../components/Event";
import CustomerLayout from "../CustomerLayout";
import { observer } from "mobx-react";

const Events=observer(()=>{

return(
    <CustomerLayout>
        <div className="container">
            <h2 style={{marginLeft:"40px",padding:"5px",borderBottom:"solid 2px",borderBottomColor:"#22092F",width:"140px"}}>What's On?</h2>
            <div style={{alignSelf:"center"}}>
                <label>Filter by:</label>
                <select name="" id="select">
                    <option disabled selected>Event Type</option>
                    <option value={""}>All</option>
                    <option value={""}>Comedy</option>
                    <option value={""}>Dance</option>
                    <option value={""}>Events</option>
                    <option value={""}>Exhibitions</option>
                    <option value={""}>Music</option>
                    <option value={""}>Theatre</option>
                </select>
            </div>
            
            <div className="eventList">
                <Event id={1}/>
                <Event id={2}/>
                <Event id={3}/>
                <Event id={4}/>
                <Event id={5}/>
                <Event id={6}/>
                <Event id={7}/>
                <Event id={8}/>
                <Event id={9}/>
                <Event id={10}/>
                <Event id={11}/>
            
            </div>
        
        </div>
    </CustomerLayout>
);
})
export default Events;