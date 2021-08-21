import React from "react";

const Continent = () => {
  return (
    <div className="covicalc--c-card">
      <div className="left">
        <div className="name">
          <h5>AFRICA</h5>
        </div>
        <div className="cases">
          <h5>11,270</h5>
          <span>New cases</span>
        </div>
        <div className="all--cases">
          <span>All cases: 22,123,345</span>
        </div>
      </div>
      <div className="right">
        <div className="deaths">
          <h5>619</h5>
          <span>New deaths</span>
          <span>Total deaths: 4,345</span>
        </div>
        <div className="recovered">
          <h5>12,955</h5>
          <span>Newly recovered</span>
          <span>Total recovered: 12,234,345</span>
        </div>
        <div className="vaccinated">
          <h5>1,878,364</h5>
          <span>New vaccinated</span>
          <span>Total vaccinated: 14,345, 789</span>
        </div>
      </div>
    </div>
  );
};

export default Continent;
