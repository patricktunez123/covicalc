import React from "react";
import ContinentsList from "./ContinentsList";
import "./Continents.scss";

const Continents = () => {
  return (
    <div className="covicalc--continents">
      <div className="info__bottom">
        <div className="info__bottom--card">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="info">
              <h1>11,234</h1>
              <span className="section-sub-title">Tests</span>
              <span className="text-muted">2,234,234</span>
            </div>
          ))}
        </div>
      </div>
      <div className="continents--container">
        <ContinentsList />
      </div>
    </div>
  );
};

export default Continents;
