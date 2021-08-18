import React from "react";
import { Button } from "antd";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="covicalc--nav">
      <div className="logo">
        <h1>covicalc</h1>
      </div>
      <Button className="covicalc--primary-btn" type="primary">
        Contact
      </Button>
    </div>
  );
};

export default Nav;
