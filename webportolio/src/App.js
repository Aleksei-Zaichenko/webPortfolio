import React, { Component } from "react";
import "./App.css";

import PropTypes from "prop-types";

//components imports
import HomePage from "./components/HomePage";
import AboutMePage from "./components/AboutMePage";
import PortfolioProjectPage from "./components/PortfioProjectsPage";
import ContactMepage from "./components/ContactMePage";

//react bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";

import ScrollableAnchor from "react-scrollable-anchor";

class PageSection extends Component {
  render() {
    return this.props.content;
  }
}

PageSection.propTypes = {
  content: PropTypes.node.isRequired,
};

function App() {
  return (
    <div className="App">
      <Navbar className="custom-navbar-style" bg="dark" variant="dark">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#aboutme">About Me</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>

      <ScrollableAnchor id={"#home"}>
        <PageSection content={<HomePage />} />
      </ScrollableAnchor>

      <ScrollableAnchor id={"#projects"}>
        <PageSection content={<PortfolioProjectPage />} />
      </ScrollableAnchor>

      <ScrollableAnchor id={"#aboutme"}>
        <PageSection content={<AboutMePage />} />
      </ScrollableAnchor>

      <ScrollableAnchor id={"#contact"}>
        <PageSection content={<ContactMepage />} />
      </ScrollableAnchor>
    </div>
  );
}

export default App;
