import React from "react";
import { numberWithCommas } from "../../helpers/numbersFormatter";

const ContinentCard = ({
  continent,
  cases,
  todayCases,
  todayDeaths,
  deaths,
  todayRecovered,
  recovered,
  testsPerOneMillion,
  tests,
}) => {
  return (
    <div className="covicalc--c-card">
      <div className="left">
        <div className="name">
          <h5 className="covicalc--sub--title">{continent}</h5>
        </div>

        <div className="cases">
          <h5 className="covicalc--text-green covicalc--text-light covicalc--medium--text covicalc--mb-small">
            {todayCases && numberWithCommas(todayCases)}
          </h5>
          <span className="covicalc--text covicalc--text-black covicalc--text-bold">
            New cases
          </span>
        </div>

        <div className="all--cases">
          <span className="covicalc--text covicalc--text-muted covicalc--text-light">
            All cases: {cases && numberWithCommas(cases)}
          </span>
        </div>
      </div>

      <div className="right">
        <div className="deaths">
          <h5 className="covicalc--text-light covicalc--text-white covicalc--medium--text covicalc--mb-small">
            {todayDeaths && numberWithCommas(todayDeaths)}
          </h5>
          <span className="covicalc--text-black covicalc--text-bold covicalc--text covicalc--mb-small">
            New deaths
          </span>
          <span className="covicalc--text covicalc--text-light covicalc--text-white">
            Total deaths: {deaths && numberWithCommas(deaths)}
          </span>
        </div>

        <div className="recovered">
          <h5 className="covicalc--text-light covicalc--text-white covicalc--medium--text covicalc--mb-small">
            {todayRecovered && numberWithCommas(todayRecovered)}
          </h5>
          <span className="covicalc--text-black covicalc--text-bold covicalc--text covicalc--mb-small">
            Newly recovered
          </span>
          <span className="covicalc--text covicalc--text-light covicalc--text-white">
            Total recovered: {recovered && numberWithCommas(recovered)}
          </span>
        </div>

        <div className="vaccinated">
          <h5 className="covicalc--text-light covicalc--text-white covicalc--medium--text covicalc--mb-small">
            {testsPerOneMillion && numberWithCommas(testsPerOneMillion)}
          </h5>
          <span className="covicalc--text-black covicalc--text-bold covicalc--text covicalc--mb-small">
            New vaccinated
          </span>
          <span className="covicalc--text covicalc--text-light covicalc--text-white">
            Total vaccinated: {tests && numberWithCommas(tests)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContinentCard;
