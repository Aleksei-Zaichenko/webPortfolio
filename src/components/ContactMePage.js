import React, { useState } from "react";
import axios from "axios";

// imort for stylings
import "./styles/ContactMePage.css";

// imports for the icons
import { GrLinkedin } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";

const API_PATH = "http://localhost/portfolio/backEnd/index.php";

function ContactMePage() {
  const [userMessage, setUserMessage] = useState({
    name: "",
    email: "",
    message: "",
    mailSent: false,
    error: null,
  });

  const handleChange = (event) => {
    setUserMessage({ ...userMessage, [event.target.name]: event.target.value });
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: userMessage,
    })
      .then((result) => {
        userMessage({
          ...userMessage,
          mailSent: result.data.sent,
        });
      })
      .catch((error) =>
        setUserMessage({ ...userMessage, error: error.message })
      );
  }

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
          <form id="messageForm" action="#">
            <label>Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userMessage.name}
              placeholder="Your name.."
              onChange={(event) => handleChange(event)}
            />

            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userMessage.email}
              placeholder="Your email"
              onChange={(event) => handleChange(event)}
            />

            <label>Message</label>
            <textarea
              id="message"
              name="message"
              value={userMessage.message}
              placeholder="Your message.."
              onChange={(event) => handleChange(event)}
            ></textarea>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1%",
              }}
            >
              <input
                id="submitButton"
                type="submit"
                value="Submit"
                onClick={(e) => handleFormSubmit(e)}
              />
            </div>
            <div>
              {userMessage.mailSent && <div>Thank you for contacting.</div>}
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
