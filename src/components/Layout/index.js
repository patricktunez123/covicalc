import React from "react";
import Footer from "../Footer";
import Nav from "../Nav";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="awesome--covicalc--app">
      <Nav />
      <div className="covicalc--container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
