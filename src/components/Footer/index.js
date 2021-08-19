import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="covicalc-footer">
      <p>
        Developed by{" "}
        <a
          href="https://tunez-patrick.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Patrick TUNEZERWANE
        </a>
      </p>
      <p>
        Designed by{" "}
        <a href="https://awesomity.rw/" target="_blank" rel="noreferrer">
          Awesomity Lab
        </a>
      </p>
    </div>
  );
};

export default Footer;
