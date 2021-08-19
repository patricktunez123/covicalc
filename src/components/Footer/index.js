import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="covicalc-footer">
      <div>
        <span className="covicalc--text covicalc--text-dark  covicalc--text-light">
          Developed by
        </span>{" "}
        <a
          href="https://tunez-patrick.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="covicalc--text covicalc--text-white covicalc--text-bold covicalc--link-primary"
        >
          Patrick TUNEZERWANE
        </a>
      </div>
      <div>
        <span className="covicalc--text covicalc--text-dark  covicalc--text-light">
          Designed by
        </span>{" "}
        <a
          href="https://awesomity.rw/"
          target="_blank"
          rel="noreferrer"
          className="covicalc--text covicalc--text-white covicalc--text-bold covicalc--link-primary"
        >
          Awesomity Lab
        </a>
      </div>
    </div>
  );
};

export default Footer;
