import React from "react";
import ContactMe from "../../components/ContactMe";
import Continents from "../../components/Continents";
import Me from "../../components/Me";
import "./Home.scss";

const Home = () => {
  return (
    <React.Fragment>
      <div className="covicalc--home">
        <div className="info__up--card">
          text tkajsdf aksdfj ak kajdf kaj fdaj dsfkj adksfj kajsdf ad sfkja
          dfkj akdsjf kajsd fkja sdkfj aksdjf kajsd fkja ksdfj kajsdf kajs dkfj
          aksdjf kajsdf kajs dkfja ksdfj kasdjf kjasdkfj ksdk
        </div>
      </div>
      <Continents />
      <Me />
      <ContactMe />
    </React.Fragment>
  );
};

export default Home;
