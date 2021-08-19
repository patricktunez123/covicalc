import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactMe from "../../components/ContactMe";
import Continents from "../../components/Continents";
import Me from "../../components/Me";
import { getCountries, getCountry } from "../../redux/actions/countryActions";
import { getContinents } from "../../redux/actions/continentActions";
import { numberWithCommas } from "../../helpers/numbersFormatter";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState();

  const { loading: countriesLoading, data: countries } = useSelector(
    (state) => state.Countries
  );

  const { loading: countryLoading, data: country } = useSelector(
    (state) => state.Country
  );

  const { loading: continentsLoading, data: continents } = useSelector(
    (state) => state.Continents
  );

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  let query = null;
  if (selectedCountry === undefined) {
    query = "Afghanistan";
  } else {
    query = selectedCountry;
  }
  useEffect(() => {
    dispatch(getCountry(query));
  }, [dispatch, query]);

  useEffect(() => {
    dispatch(getContinents());
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className="covicalc--home">
        <div className="search--container">
          <h1 className="section-title">Updates</h1>
          <span>Search a country</span>
          <div className="input">
            <form>
              {countriesLoading ? (
                "loading"
              ) : (
                <select
                  onChange={(e) => handleChange(e)}
                  data-live-search="true"
                >
                  {countries?.map((country) => (
                    <option
                      key={country?.country}
                      data-tokens={country?.country}
                    >
                      {country?.country}
                    </option>
                  ))}
                </select>
              )}
            </form>
          </div>
        </div>
        <div className="info__up--card">
          <h1>
            {countryLoading
              ? "loading"
              : country?.cases && numberWithCommas(country?.cases)}
          </h1>
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
