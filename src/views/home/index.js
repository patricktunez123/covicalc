import React from "react";
import ContactMe from "../../components/ContactMe";
import Continents from "../../components/Continents";
import Me from "../../components/Me";
import "./Home.scss";

const Home = () => {
  return (
    <React.Fragment>
      <div className="covicalc--home">this is the hom</div>
      <Continents />
      <Me />
      <ContactMe />
    </React.Fragment>
  );
};

export default Home;
