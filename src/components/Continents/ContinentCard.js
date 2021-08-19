import React from "react";

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
          <h5>{continent}</h5>
        </div>
        <div className="cases">
          <h5>{todayCases}</h5>
          <span>New cases</span>
        </div>
        <div className="all--cases">
          <span>All cases: {cases}</span>
        </div>
      </div>
      <div className="right">
        <div className="deaths">
          <h5>{todayDeaths}</h5>
          <span>New deaths</span>
          <span>Total deaths: {deaths}</span>
        </div>
        <div className="recovered">
          <h5>{todayRecovered}</h5>
          <span>Newly recovered</span>
          <span>Total recovered: {recovered}</span>
        </div>
        <div className="vaccinated">
          <h5>{testsPerOneMillion}</h5>
          <span>New vaccinated</span>
          <span>Total vaccinated: {tests}</span>
        </div>
      </div>
    </div>
  );
};

export default ContinentCard;
