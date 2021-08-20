import React from "react";
import "./ContactMe.scss";

const ContactMe = () => {
  return (
    <div className="tunez-contact">
      <h6 className="section-title">reach me</h6>
      <p>
        <span>Email</span>
        <a href="/" target="_blank">
          tunezepatrick@gmail.com
        </a>
      </p>
      <p>
        <span>Phone</span>
        <a href="/" target="_blank">
          +250781429268
        </a>
      </p>
      <p>
        <span>Profile</span>
        <a href="/" target="_blank">
          https://tunez-patrick.vercel.app/
        </a>
      </p>
    </div>
  );
};

export default ContactMe;
