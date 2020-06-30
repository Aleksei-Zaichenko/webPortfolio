import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Scrollchor from "react-scrollchor";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand>
          <Scrollchor
            to="#home"
            animate={{ offset: 20, duration: 600 }}
            className="nav-link"
          >
            Home
          </Scrollchor>
        </Navbar.Brand>
        <Navbar.Brand>
          <Scrollchor
            to="#projects"
            // afterAnimate={() => updateState(this)}
            animate={{ offset: 20, duration: 600 }}
            className="nav-link"
          >
            Projects
          </Scrollchor>
        </Navbar.Brand>
        <Navbar.Brand>
          <Scrollchor
            to="#aboutme"
            animate={{ offset: 20, duration: 600 }}
            className="nav-link"
          >
            About Me
          </Scrollchor>
        </Navbar.Brand>
        <Navbar.Brand>
          <Scrollchor
            to="#contact"
            animate={{ offset: 20, duration: 600 }}
            className="nav-link"
          >
            Contact
          </Scrollchor>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
