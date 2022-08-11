import React from "react";
import "../styles/index.css";
import weArtBanner from "../assets/We_ART_Web_banner.width-500.png";
import CustomerLayout from "../layouts/CustomerLayout";

const About = () => {
  return (
    <CustomerLayout>
      <div className="container" style={{ padding: "50px" }}>
        <h1>About</h1>
        <p>
          <img
            src={weArtBanner}
            alt=""
            width={"500px"}
            style={{ float: "left", marginRight: "30px" }}
          />
          UJ Arts & Culture, a division of the Faculty of Art, Design &
          Architecture (FADA) produces and presents world-class student and
          professional arts progra3mmes aligned to the UJ vision of an
          international university of choice, anchored in Africa, dynamically
          shaping the future. A robust range of arts platforms are offered on
          all four UJ campuses for students, staff, alumni and the general
          public to experience and engage with emerging and established
          Pan-African and international artists drawn from the full spectrum of
          the arts.
          <br />
          <br />
          In addition to UJ Arts & Culture,{" "}
          <a href="http://www.uj.ac.za/fada">FADA</a> offers programmes in eight
          creative disciplines in art, design and architecture, as well as being
          home to the NRF SARChI Chair in South African Art and Visual Culture,
          and the Visual Identities in Art & Design Research Centre.
        </p>

        <h3>
          <b>Student campus programmes</b>
        </h3>
        <p>
          Cultural and creative activities across a range of disciplines offer
          broad student participation in the arts across all four UJ campuses.
          The programmes are free for all UJ staff and students. Contact the
          following Arts & Culture offices for programme details of the relevant
          campuses:
        </p>
        <p>
          Soweto :: 011 559 5678
          <br />
          <br />
          Doornfontein :: 011 559 6959
          <br />
          <br />
          Bunting Road :: 011 559 1309
          <br />
          <br />
          Kingsway :: 011 559 4674
        </p>
      </div>
    </CustomerLayout>
  );
};
export default About;
