import React from "react";

import "./styles/ContactMePage.css";

// imports for the icons
import { GrLinkedin } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";

function ContactMePage() {
  return (
    <div id="contact" className="contactMePage">
      <h4 id="thankfulHeader">Thanks for visiting</h4>
      <div id="linksToExternalProfiles">
        <a
          href="https://www.linkedin.com/in/aleksei-zaichenko-1b56141a7/"
          target="_blank"
        >
          <GrLinkedin style={{ color: "blue" }} /> My LinkedIn profile
        </a>
        <a
          href="https://www.linkedin.com/in/aleksei-zaichenko-1b56141a7/"
          target="_blank"
        >
          <GoMarkGithub style={{ color: "black" }} /> My GitHub profile
        </a>
      </div>
    </div>
  );
}

export default ContactMePage;
