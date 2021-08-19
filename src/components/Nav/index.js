import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="covicalc--nav">
      <div className="logo">
        <Link to="/" className="covicalc--title covicalc--text-white ">
          covicalc
        </Link>
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
