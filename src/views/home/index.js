import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactMe from "../../components/ContactMe";
import Continents from "../../components/Continents";
import Me from "../../components/Me";
import { getCountries } from "../../redux/actions/countriesActions";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.Countries);
  console.log("data", loading, data);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

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
