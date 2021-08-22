import React from "react";
import "./ContactMe.scss";

const ContactMe = () => {
  return (
    <div className="tunez-contact">
      <h6 className="covicalc--title covicalc--text-white covicalc--mb-2">
        reach me
      </h6>
      <div className="contact--info covicalc--mb-1">
        <span className="covicalc--text-white covicalc--text-bold">Email</span>
        <a
          href="mailto://tunezepatrick@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="covicalc--text-white covicalc--text-light covicalc--link-primary"
        >
          tunezepatrick@gmail.com
        </a>
      </div>
      <div className="contact--info covicalc--mb-1">
        <span className="covicalc--text-white covicalc--text-bold">Phone</span>
        <a
          href="tel://+250781429268"
          target="_blank"
          rel="noreferrer"
          className="covicalc--text-white covicalc--text-light covicalc--link-primary"
        >
          +250781429268
        </a>
      </div>
      <div className="contact--info covicalc--mb-1">
        <span className="covicalc--text-white covicalc--text-bold">
          Profile
        </span>
        <a
          href="https://tunez-patrick.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="covicalc--text-white covicalc--text-light covicalc--link-primary"
        >
          https://tunez-patrick.vercel.app/
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
