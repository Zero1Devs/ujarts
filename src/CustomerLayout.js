import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {Outlet } from 'react-router-dom';

const CustomerLayout=(props)=>{
    return (
        <>
            <Navbar/>
              {props.children}
           <Footer/>
        </>
      );

}
export default CustomerLayout;