import React from "react";
import { Button } from "antd";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="covicalc--nav">
      <div className="logo">
        <h1 className="covicalc--title covicalc--text-white ">covicalc</h1>
      </div>
      <div>
        <Button
          size="large"
          className="covicalc--primary-btn covicalc--text"
          type="primary"
        >
          Contact
        </Button>
      </div>
    </div>
  );
};

export default Nav;
