import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ujlogo from "../../assets/ujLogo.jpg";
import '../../styles/index.css';
import '../../styles/adminLayout.css';
import { observer } from "mobx-react";
import { useAdminPresenter } from "./presenter";


const Login=observer(()=>{
    const {login,setValue}=useAdminPresenter;
    return(
        <div style={{display:"flex",border:"", alignItems:"center",justifyContent:"center", height:"100vh"}}>
            <img src={ujlogo} width="20%" alt='UJ logo' height="40%"/>
            <div className="loginForm">
                <Input type="text" name="email" onChange={(e)=>setValue(e)} placeholder="Email/Username" className="textInput"/>
                <Input type="password" name="password" onChange={(e)=>setValue(e)} placeholder="Password" className="textInput"/>
                <Button 
                    text="Login" 
                    className="btnBookNow" 
                    type="submit"
                    style={{width:"94%",marginTop:"20px",height:"40px"}} 
                    onClick={login}
                />
            </div>
        </div>
    )
})
export default Login;