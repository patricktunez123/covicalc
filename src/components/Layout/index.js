import React from "react";
import Footer from "../Footer";
import Nav from "../Nav";
import Mobile from "../Nav/Mobile";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="awesome--covicalc--app">
      <Nav />
      <div className="covicalc--container">{children}</div>
      <Footer />
      <Mobile />
    </div>
  );
};

export default Layout;
