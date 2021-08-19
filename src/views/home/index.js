import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactMe from "../../components/ContactMe";
import Continents from "../../components/Continents";
import Me from "../../components/Me";
import { getCountries } from "../../redux/actions/countriesActions";
import { getContinents } from "../../redux/actions/continentActions";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { loading: countriesLoading, data: countries } = useSelector(
    (state) => state.Countries
  );
  const { loading: continentsLoading, data: continents } = useSelector(
    (state) => state.Continents
  );
  console.log("coutry data", countriesLoading, countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getContinents());
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
      <Continents loading={continentsLoading} continents={continents} />
      <Me />
      <ContactMe />
    </React.Fragment>
  );
};

export default Home;
