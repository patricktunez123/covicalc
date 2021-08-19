import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin, DatePicker, Button } from "antd";
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
  console.log("this is the ", countries);
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
          <h1 className="covicalc--title covicalc--text-white ">Updates</h1>
          <span className="covicalc--text covicalc--text-muted covicalc--text-light covicalc--mb-1">
            Search a country
          </span>
          <div className="covicalc--mb-2">
            {countriesLoading ? (
              "loading"
            ) : (
              <div className="covicalc--search--input">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/255px-Flag_of_Rwanda.svg.png" />
                <form>
                  <select
                    onChange={(e) => handleChange(e)}
                    data-live-search="true"
                    className="select--country"
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
                </form>
                <DatePicker />
                <Button className="covicalc--secondary-btn">Submit</Button>
              </div>
            )}
          </div>
        </div>
        <div className="info__up--card">
          <h1 className="covicalc--large--text covicalc--text-green covicalc--text-light covicalc--mb-1">
            {countryLoading ? (
              <Spin />
            ) : (
              country?.cases && numberWithCommas(country?.cases)
            )}
          </h1>
          {!countryLoading && (
            <span className="covicalc--text covicalc--text-white covicalc--text-bold">
              Cumulatively
            </span>
          )}
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
