import React from "react";
import "./Me.scss";

const Me = () => {
  return (
    <div className="tunez--app">
      <div className="left"></div>
      <div className="right">
        <h5 className="section-title">Patrick TUNEZERWANE</h5>
        <h6 className="section-sub-title">Skills</h6>
        {[...Array(4)].map((_, index) => (
          <span key={index}>Skill title</span>
        ))}
      </div>
    </div>
  );
};

export default Me;
