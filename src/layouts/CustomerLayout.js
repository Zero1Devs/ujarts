import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { BsWhatsapp } from "react-icons/bs";

import whatsappLogo from "../assets/whatsapp.png";

const CustomerLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Float>
        <a href="https://web.whatsapp.com/send?phone=27647770671&text=Hello!%20I%20have%20an%20issue%20with">
          <My_float>
            <BsWhatsapp color="white" size={25} />
          </My_float>
        </a>
      </Float>

      <Footer />
    </>
  );
};
export default CustomerLayout;

const Float = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #0c9;
  color: "#25D366";
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
`;

const My_float = styled.div`
  margin-top: 18px;
`;
