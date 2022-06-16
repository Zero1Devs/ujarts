import React from "react";
import { useParams } from "react-router-dom";
import thumbnail from '../assets/thumbnail.jpg';

const EventSummary=()=>{
    let params = useParams();

return(
    <div style={{border:"solid 5px red",height:"500px"}}>
        <h1>event {params.event}</h1>
        <img alt="Event" src={thumbnail}  width="30%" height="50%"/>
    </div>
);
}
export default EventSummary;