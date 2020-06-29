import React, { Component } from "react";
import "./App.css";

import PropTypes from "prop-types";

//components imports
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutMePage from "./components/AboutMePage";
import PortfolioProjectPage from "./components/PortfolioProjectsPage";
import ContactMepage from "./components/ContactMePage";

//react bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";

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
      <NavBar />
      <HomePage />
      <PortfolioProjectPage />
      <AboutMePage />
      <ContactMepage />
    </div>
  );
}

export default App;
