import React from "react";
import { StyledButton } from "./Button";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiMapPin,
  FiClock,
  FiPhone,
  FiAtSign,
} from "react-icons/fi";
import ujlogo from "../assets/ujLogo.jpg";
import thefuturereimagined from "../assets/thefuturereimagined.png";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <SubscribeSection>
        <Interests id="interests">
          <h1>Subscribe to our Newsletter</h1>
          <p>
            You’ll get to be one of the first to book exciting events and
            receive updates on your selected interests.
            <br />
            Pick Your Interests:
          </p>
          <div>
            <span>+ Theatre</span>
            <span>+ Music</span>
            <span>+ Dance</span>
            <span>+ Exhibitions</span>
            <span>+ Comedy</span>
            <span>+ Events</span>
          </div>
        </Interests>

        <Div>
          <input placeholder="Enter your email" type="text" />
          <SubscribeButton background="var(--orange)" hover="var(--darkorange)">
            Subscribe
          </SubscribeButton>
        </Div>
      </SubscribeSection>
      <hr style={{ margin: "60px 0px" }} />
      <h1 style={{ textAlign: "center" }}>Get in Touch</h1>
      <GetInTouch id="getInTouch">
        <div className="">
          <h2>UJ ARTS CENTRE</h2>

          <a href="callto:0115594674" rel="noopener">
            <span>
              <FiPhone size="23" />
            </span>
            011 559 4674
          </a>
          <a href="mailto:ujarts@uj.ac.za" rel="noopener">
            <span>
              <FiAtSign size="23" />
            </span>
            ujarts@uj.ac.za
          </a>

          <a
            href="https://www.google.co.za/maps/place/UJ+Arts+%26+Culture/@-26.1828273,27.99803,17z/data=!3m1!4b1!4m5!3m4!1s0x1e950b946f9d58c7:0xb22962381ff447ac!8m2!3d-26.1828273!4d28.0002187"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <span>
              <FiMapPin size="23" />
            </span>
            UJ Kingsway Campus Corner of Kingsway Ave and University Rd,
            Auckland Park
          </a>
        </div>

        <div>
          <h2>UJ ARTS GALLERY</h2>
          <a href="callto:0115594674" rel="noopener">
            <span>
              <FiPhone size="23" />
            </span>
            011 559 4674
          </a>
          <a href="mailto:gallery@uj.ac.za" rel="noopener">
            <span>
              <FiAtSign size="23" />
            </span>
            gallery@uj.ac.za
          </a>
          <a
            href="https://www.google.co.za/maps/place/UJ+Arts+%26+Culture/@-26.1828273,27.99803,17z/data=!3m1!4b1!4m5!3m4!1s0x1e950b946f9d58c7:0xb22962381ff447ac!8m2!3d-26.1828273!4d28.0002187"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <span>
              <FiMapPin size="23" />
            </span>
            UJ Kingsway Campus Corner of Kingsway Ave and University Rd,
            Auckland Park
          </a>
          <label>
            <span>
              <FiClock size="23" />
            </span>
            Weekdays @ 9:00 - 15:30 <br />
            Closed weekends and public holidays
          </label>
        </div>

        <Social>
          <h2>SOCIAL</h2>
          <a
            href="https://www.facebook.com/UJArtsCentre/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <span>
              <FiFacebook size="23" />
            </span>
            Facebook
          </a>
          <a
            href="https://www.youtube.com/channel/UCOd76GJ46qAKZxRly8F7snQ"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <span>
              <FiYoutube size="23" />
            </span>
            Youtube
          </a>
          <a
            href="https://twitter.com/UJArts_Culture"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <span>
              <FiTwitter size="23" />
            </span>
            Twitter
          </a>
          <a
            href="https://www.instagram.com/ujartsculture"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <span>
              <FiInstagram size="23" />
            </span>
            Instagram
          </a>
        </Social>

        <div>
          <LinkToUj
            href="https://www.uj.ac.za"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img src={ujlogo} width="150px" alt="UJ logo" height="150px" />
            <img
              src={thefuturereimagined}
              alt="The Future Reimagined"
              width="140px"
              height="55px"
            />
          </LinkToUj>
        </div>
      </GetInTouch>
      <p style={{ textAlign: "center" }}>
        © 2020 University of Johannesburg :: UJ Arts & Culture. All rights
        reserved.
        <a
          style={{ color: "#ff4102" }}
          href="https://www.uj.ac.za/about/Pages/TCs.aspx"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Terms & Conditions.
        </a>
      </p>
    </StyledFooter>
  );
};
export default Footer;

const StyledFooter = styled.footer`
  color: white;
  background-color: #282c34;
  height: auto;
  padding: 3% 10%;
  position: relative;
  bottom: 0%;
  top: 100%;
  margin-top: 100px;
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
    padding: 10px;
  }
`;
const SubscribeSection = styled.section`
  text-align: center;
  border: solid 0px var(--darkorange);
  padding: 0px 60px;
  p {
    text-align: start;
  }
  span {
    border: solid 1px var(--darkorange);
    color: var(--darkorange);
    padding: 5px;
    margin: 10px;
    border-radius: 10px;
  }
  input {
    height: 50px;
    width: 35%;
    border: none;
    background-color: black;
    padding-left: 30px;
    color: white;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
    input {
      width: 80%;
    }
    button {
      width: 80%;
    }
  }
`;
const Interests = styled.div`
  margin-bottom: 30px;
  border: solid 0px;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 600px) {
    p {
      width: 90%;
      margin-left: 10px;
      align-self: center;
    }
  }
`;
const SubscribeButton = styled(StyledButton)`
  width: 10vw;
  max-width: 200px;
  height: 50px;
`;
const GetInTouch = styled.section`
  display: flex;
  border: solid 0 var(--darkorange);
  justify-content: center;
  flex-wrap: wrap;
  div {
    border: solid 0 var(--darkorange);
    margin: 15px;
    width: 220px;
    padding: 20px;
  }
  h2 {
    font-size: 16px;
  }
  label {
    display: flex;
    width: 200px;
    margin: 5px;
    flex-wrap: wrap;
  }
  a {
    text-decoration: none;
    text-transform: none;
    color: white;
    border: solid 0px;
    display: flex;
    margin-bottom: 10px;
    :hover {
      color: var(--darkorange);
    }
  }
  span {
    margin-right: 5px;
  }
`;
const Social = styled.div`
  display: flex;
  flex-direction: column;
`;
const LinkToUj = styled.a`
  display: flex;
  flex-direction: column;
  border: solid;
  align-items: center;
  img {
    margin: 3px;
  }
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
