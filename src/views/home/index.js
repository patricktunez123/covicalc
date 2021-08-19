import React from "react";
import ContactMe from "../../components/ContactMe";
import Continents from "../../components/Continents";
import Me from "../../components/Me";
import "./Home.scss";

const Home = () => {
  return (
    <React.Fragment>
      <div className="covicalc--home">
        <div className="search--container">
          <h1 className="section-title">Updates</h1>
          <span>Search a country</span>
          <div className="input">input goes here</div>
        </div>
        <div className="info__up--card">
          <h1>2,188,881</h1>
          <span>Cumulatively</span>
        </div>
      </div>
      <Continents />
      <Me />
      <ContactMe />
    </React.Fragment>
  );
};

export default Home;
