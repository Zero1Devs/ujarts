import React from "react";
import { Link } from "react-router-dom";
const NotFound=()=>{
    return(
        <div style={{display:"grid",placeItems:"center",height:"100vh"}}>
            <div>
                <h1>404!</h1>
                <h2>Page Not Found!</h2>
                <Link to={"/"}>Go back!</Link>
            </div>
        </div>
    );
}
export default NotFound;