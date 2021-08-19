import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";

const Mobile = () => {
  return (
    <div className="mobile__menu">
      <Link to="/">
        <div className="menu__items">
          <AiOutlineHome className="icon" />
          <span className="text-muted">Home</span>
        </div>
      </Link>
      <Link to="/search/id">
        <div className="menu__items">
          <AiOutlineMail className="icon" />
          <span className="text-muted">Search</span>
        </div>
      </Link>
    </div>
  );
};

export default Mobile;
