import React from "react";
import "./App.css";

//components imports
import HomePage from "./components/HomePage";
import AboutMePage from "./components/AboutMePage";
import PortfolioProjectPage from "./components/PortfioProjectsPage";
import ContactMepage from "./components/ContactMePage";

//react bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <HomePage />
        <AboutMePage />
        <PortfolioProjectPage />
        <ContactMepage />
      </Container>
    </div>
  );
}

export default App;
