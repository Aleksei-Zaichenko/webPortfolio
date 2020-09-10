import React from "react";

import "./styles/ContactMePage.css";

// imports for the icons
import { GrLinkedin } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";

function ContactMePage() {
  return (
    <div id="contact" className="contactMePage">
      <h4 id="thankfulHeader">Thanks for visiting</h4>

      <div id="contactContainer">
        <div style={{ width: "50%" }}>
          <h5>
            If you would like to get in touch with me, please, my contact
            information is
          </h5>
          <h5>
            <u>Email Address:</u>{" "}
            <a href="mailto:aleksei.zaichenko.nyc@gmail.com">
              aleksei.zaichenko.nyc@gmail.com
            </a>
          </h5>
          <h5>
            <u>Phone number:</u>{" "}
            <a href="tel:929-363-1114">+1 (929)-363-1114</a>
          </h5>
        </div>

        <div id="containerForMessageForm">
          <h5 style={{ textAlign: "center" }}>Or send me a message</h5>
          <form id="messageForm" action="/action_page.php">
            <label>First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />
            <label>Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />

            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
            />

            <label>Message</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Your message.."
            ></textarea>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <input id="submitButton" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      {/*contactContainer*/}

      <div id="containerForLinks">
        <div id="linksToExternalProfiles">
          <a
            href="https://www.linkedin.com/in/aleksei-zaichenko-1b56141a7/"
            target="_blank"
          >
            <GrLinkedin style={{ color: "blue" }} /> My LinkedIn profile
          </a>
          <a href="https://github.com/Aleksei-Zaichenko" target="_blank">
            <GoMarkGithub style={{ color: "black" }} /> My GitHub profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMePage;
