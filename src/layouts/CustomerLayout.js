import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { BsWhatsapp } from "react-icons/bs";

const CustomerLayout = (props) => {
  return (
    <Container>
      <Navbar />
      {props.children}
      <Float>
        <a href="https://web.whatsapp.com/send?phone=27647770671&text=Hello!%20I%20have%20an%20issue%20with">
          <MyFloat>
            <BsWhatsapp color="white" size={25} />
          </MyFloat>
        </a>
      </Float>

      <Footer />
    </Container>
  );
};
export default CustomerLayout;

const Float = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 4%;
  background-color: #0c9;
  color: "#25D366";
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  ${
    "" /* @media only screen and (max-width: 600px) {
    right: 30%;
  } */
  }
`;

const MyFloat = styled.div`
  margin-top: 18px;
`;

const Container = styled.div`
  width: 100vw;
  @media only screen and (max-width: 600px) {
    width: 100vw;
    border: solid 0px;
    margin: 0px;
  }
`;
