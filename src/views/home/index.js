import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactMe from "../../components/ContactMe";
import Continents from "../../components/Continents";
import Me from "../../components/Me";
import { getCountries, getCountry } from "../../redux/actions/countryActions";
import { getContinents } from "../../redux/actions/continentActions";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();

  const { loading: countriesLoading, data: countries } = useSelector(
    (state) => state.Countries
  );

  const { loading: countryLoading, data: country } = useSelector(
    (state) => state.Country
  );

  const { loading: continentsLoading, data: continents } = useSelector(
    (state) => state.Continents
  );

  console.log("coutries data====>", countriesLoading, countries);
  console.log("coutry data ****>>", countryLoading, country);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCountry("rwanda"));
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
          <h1>{countryLoading ? "loading" : country?.cases}</h1>
          <span>Cumulatively</span>
        </div>
      </div>
      <Continents
        loading={continentsLoading}
        continents={continents}
        countryLoading={countryLoading}
        country={country}
      />
      <Me />
      <ContactMe />
    </React.Fragment>
  );
};

export default Home;
