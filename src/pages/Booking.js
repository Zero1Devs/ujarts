import React from "react";
import CustomerLayout from "../CustomerLayout";
import Input from "../components/Input";
//import "../styles/adminLayout.css";
import "../styles/index";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';

const Booking=()=>{
    let navigate=useNavigate();
    return(
        <CustomerLayout>
            <div style={{display:"flex",flexDirection:"column", placeItems:"center"}}>
                <h1>Book your tickets</h1>
                <p>Terms & Conditions
                    <ul>
                        <li>UJ is a mandatory vaccination site and requires all visitors accessing campuses to be vaccinated.</li>
                        <li>Please remember to bring proof of identification and your vaccination certificate for verification at the gate. Please arrive early to allow additional time for screening.</li>
                    </ul>
                </p>

                <form className="loginForm">
                    <Input type="text" placeholder="Name" className="textInput"/>
                    <Input type="text" placeholder="Surname" className="textInput"/>
                    <Input type="text" placeholder="Email" className="textInput"/>
                    <Input type="text" placeholder="Email/Username" className="textInput"/>
                    <Input type="text" placeholder="Cellphone Number" className="textInput"/>
                    <label >Date</label><br/>
                    <select name="" className="textInput">
                        <option value="">Date 1</option>
                        <option value="">Date 2</option>
                        <option value="">Date 3</option>
                    </select><br/>
                    <label>Quantity</label><br/>
                    <Input type="number" className="textInput" min="1"/><br/>
                    
                    <Button text="Cancel" onClick={()=>navigate("/events")} className="btnBookNow" style={{width:"95%"}}/> 
                    
                    <Button className="btnFullDetails" style={{width:"95%"}} text="Proceed with Payment"/>
                
            
                </form>
            </div>
        </CustomerLayout>
    );
}
export default Booking;