import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ContinentCard from "./ContinentCard";
import { numberWithCommas } from "../../helpers/numbersFormatter";
import "./Continents.scss";

const Continents = ({ loading, continents, countryLoading, country }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 50,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 0,
    },
  };

  return (
    <div className="covicalc--continents">
      <div className="info__bottom">
        <div className="info__bottom--card">
          {countryLoading ? (
            "loading"
          ) : (
            <>
              <div className="info">
                <h1>
                  {country?.testsPerOneMillion &&
                    numberWithCommas(country?.testsPerOneMillion)}
                </h1>
                <span className="section-sub-title">Tests</span>
                <span className="text-muted">
                  {country?.tests && numberWithCommas(country?.tests)}
                </span>
              </div>

              <div className="info">
                <h1>{country?.active && numberWithCommas(country?.active)}</h1>
                <span className="section-sub-title">Postive cases</span>
                <span className="text-muted">
                  {country?.cases && numberWithCommas(country?.cases)}
                </span>
              </div>

              <div className="info">
                <h1>
                  {country?.activePerOneMillion &&
                    numberWithCommas(country?.activePerOneMillion)}
                </h1>
                <span className="section-sub-title">Hospitalized</span>
                <span className="text-muted">
                  {country?.critical && numberWithCommas(country?.critical)}
                </span>
              </div>

              <div className="info">
                <h1>
                  {country?.todayRecovered &&
                    numberWithCommas(country?.todayRecovered)}
                </h1>
                <span className="section-sub-title">Recovered</span>
                <span className="text-muted">
                  {country?.recovered && numberWithCommas(country?.recovered)}
                </span>
              </div>

              <div className="info">
                <h1>
                  {country?.todayDeaths &&
                    numberWithCommas(country?.todayDeaths)}
                </h1>
                <span className="section-sub-title">Deaths</span>
                <span className="text-muted">
                  {country?.deaths && numberWithCommas(country?.deaths)}
                </span>
              </div>

              <div className="info">
                <h1>
                  {country?.oneTestPerPeople &&
                    numberWithCommas(country?.oneTestPerPeople)}
                </h1>
                <span className="section-sub-title">Vaccinated</span>
                <span className="text-muted">
                  {country?.testsPerOneMillion &&
                    numberWithCommas(country?.testsPerOneMillion)}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="continents--container">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <Carousel
            partialVisible={true}
            centerMode={false}
            arrows
            slidesToSlide={1}
            itemClass="image-item"
            responsive={responsive}
          >
            {continents &&
              continents.map((continent) => (
                <ContinentCard key={continent?.continent} {...continent} />
              ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Continents;
