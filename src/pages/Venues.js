import React from "react";
import '../App.css';
import CustomerLayout from "../CustomerLayout";

const Venues=()=>{
    return(
        <CustomerLayout>
            <div className="venuesList">
                <div className="eventCard"></div>
                <div className="eventCard"></div>
                <div className="eventCard"></div>
                <div className="eventCard"></div>
                <div className="eventCard"></div>
            </div>
        </CustomerLayout>
    )
}
export default Venues;