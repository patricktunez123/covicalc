import React from "react";
import { Skills } from "./Skills";
import "./Me.scss";

const Me = () => {
  return (
    <div className="tunez--app">
      <div className="left"></div>
      <div className="right">
        <div className="right--content">
          <h5 className="covicalc--title covicalc--mb-2 covicalc--text-black">
            Patrick TUNEZERWANE
          </h5>
          <h6 className="covicalc--text-bold covicalc--mb-1">Skills</h6>
          {Skills.map((skill) => (
            <span key={skill.id}>
              <a
                className="covicalc--text covicalc--text-muted covicalc--link-secondary covicalc--text-light"
                href={skill.url}
                target="_blank"
                rel="noreferrer"
              >
                {skill.skill}
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Me;
