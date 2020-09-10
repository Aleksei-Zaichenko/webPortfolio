import React from "react";
import "./styles/AboutMePage.css";
import { GiRoad } from "react-icons/gi";
import { FaHands } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { GiCakeSlice } from "react-icons/gi";

function AboutMePage() {
  return (
    <div id="aboutme" className="aboutMePage">
      <h2
        style={{
          textAlign: "center",
          marginTop: "4.5%",
        }}
      >
        About Me
      </h2>
      <p
        style={{
          textAlign: "center",
          fontWeight: "640",
          fontSize: "1.1rem",
          margin: "1% 5% 0 5%",
        }}
      >
        My name is Aleksei Zaichenko. I am just starting my web development
        journey <GiRoad /> <br />
        On January 26, 2020 I enrolled in intense programming bootcamp{" "}
        <a href="https://lambdaschool.com/" target="_blank">
          (Lambda - Online Coding School){" "}
        </a>
        for web development with a plan to learn and gain as many skills as I
        can. <br />
        Prior Lambda bootcamp I did two years of college, I majored in Computer
        Science. On moment, when I realized, that I cannot continue my education
        due to financial difficulties my GPA was 3.75
        <br />
        My life goal is to learn as much as I can and pursue the happiness
        through the knowledge and hard work. <br />
      </p>
      <div id="threeRules">
        <h2>
          Peace <FaHands />
        </h2>
        <h2>
          FriendShip <GiThreeFriends />
        </h2>
        <h2>
          Chewing Gum <GiCakeSlice />
        </h2>
      </div>
    </div>
  );
}

export default AboutMePage;
