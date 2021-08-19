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
          <span className="covicalc--text covicalc--text-dark  covicalc--text-light covicalc--mb-1">
            Search a country
          </span>
          <div className="covicalc--mb-2">
            {countriesLoading ? (
              "Wait..."
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
                <DatePicker className="small--devices" />
                <Button className="covicalc--secondary-btn small--devices">
                  Submit
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="country--stats-cards">
          <div className="card-top">
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
          <div className="card-bottom">
            {countryLoading ? (
              <div className="wait--loader">
                <span>Wait...</span>
              </div>
            ) : (
              <>
                <div className="info">
                  <h1 className="covicalc--text-green covicalc--text-light covicalc--medium--text covicalc--mb-small">
                    {country?.testsPerOneMillion &&
                      numberWithCommas(country?.testsPerOneMillion)}
                  </h1>
                  <span className="covicalc--text-black covicalc--text-bold covicalc--text covicalc--mb-small">
                    Tests
                  </span>
                  <span className="text-muted covicalc--text-light covicalc--text">
                    {country?.tests && numberWithCommas(country?.tests)}
                  </span>
                </div>

                <div className="info">
                  <h1 className="covicalc--text-green covicalc--text-light covicalc--medium--text covicalc--mb-small">
                    {country?.active && numberWithCommas(country?.active)}
                  </h1>
                  <span className="covicalc--text-black covicalc--text-bold covicalc--text covicalc--mb-small">
                    Postive cases
                  </span>
                  <span className="text-muted covicalc--text-light covicalc--text">
                    {country?.cases && numberWithCommas(country?.cases)}
                  </span>
                </div>

                <div className="info">
                  <h1 className="covicalc--text-green covicalc--text-light covicalc--medium--text covicalc--mb-small">
                    {country?.activePerOneMillion &&
                      numberWithCommas(country?.activePerOneMillion)}
                  </h1>
                  <span className="covicalc--text-black covicalc--text-bold covicalc--text covicalc--mb-small">
                    Hospitalized
                  </span>
                  <span className="text-muted covicalc--text-light covicalc--text">
                    {country?.critical && numberWithCommas(country?.critical)}
                  </span>
                </div>

                <div className="info">
                  <h1 className="covicalc--text-green covicalc--text-light covicalc--medium--text covicalc--mb-small">
                    {country?.todayRecovered &&
                      numberWithCommas(country?.todayRecovered)}
                  </h1>
                  <span className="covicalc--text-black covicalc--text-bold covicalc--text covicalc--mb-small">
                    Recovered
                  </span>
                  <span className="text-muted covicalc--text-light covicalc--text">
                    {country?.recovered && numberWithCommas(country?.recovered)}
                  </span>
                </div>

                <div className="info">
                  <h1 className="covicalc--text-green covicalc--text-light covicalc--medium--text covicalc--mb-small">
                    {country?.todayDeaths &&
                      numberWithCommas(country?.todayDeaths)}
                  </h1>
                  <span className="covicalc--text-black covicalc--text-bold covicalc--text covicalc--mb-small">
                    Deaths
                  </span>
                  <span className="text-muted covicalc--text-light covicalc--text">
                    {country?.deaths && numberWithCommas(country?.deaths)}
                  </span>
                </div>

                <div className="info">
                  <h1 className="covicalc--text-green covicalc--text-light covicalc--medium--text covicalc--mb-small">
                    {country?.oneTestPerPeople &&
                      numberWithCommas(country?.oneTestPerPeople)}
                  </h1>
                  <span className="covicalc--text-black covicalc--text-bold covicalc--text covicalc--mb-small">
                    Vaccinated
                  </span>
                  <span className="text-muted covicalc--text-light covicalc--text">
                    {country?.testsPerOneMillion &&
                      numberWithCommas(country?.testsPerOneMillion)}
                  </span>
                </div>
              </>
            )}
          </div>
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
