import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ujlogo from "../../assets/ujLogo.jpg";

const Login=()=>{
return(
    <div style={{display:"flex",border:"",flexDirection:"column", alignItems:"center",justifyContent:"center", height:"100vh"}}>
        <img src={ujlogo} width="115px" alt='UJ logo' height="115px"/>
        <form className="loginForm" 
            style={{ 
                border:"solid 0px #ff4102",
                borderRadius:"6px",
                padding:"20px",
                textAlign:"center",
                height:"50vh",
                width:"30%",
                marginTop:"50px",
                filter:"drop-shadow(2px 2px 6px #45116d)",
                background:"white",
            }}
        >
            <h1 style={{color: "#22092F"}}>Login</h1>
            <Input type="text" placeholder="Email/Username" className="textInput"/>
            <Input type="text" placeholder="Password" className="textInput"/>
            <Button text="Login" className="btnBookNow" style={{width:"96%",height:"40px"}} onClick={()=>alert("Logged")}/>
        </form>
    </div>
)
}
export default Login;