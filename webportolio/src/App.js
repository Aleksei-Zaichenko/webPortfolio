import React from "react";
import "./App.css";

//components imports
import HomePage from "./components/HomePage";
import AboutMePage from "./components/AboutMePage";
import PortfolioProjectPage from "./components/PortfioProjectsPage";
import ContactMepage from "./components/ContactMePage";

//react bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Brand href="#home">Projects</Navbar.Brand>
          <Navbar.Brand href="#home">About Me</Navbar.Brand>
          <Navbar.Brand href="#home">Contact</Navbar.Brand>
        </Navbar>
        <Row>
          <HomePage />
        </Row>
        <Row>
          <AboutMePage />
        </Row>
        <Row>
          <PortfolioProjectPage />
        </Row>
        <Row>
          <ContactMepage />
        </Row>
      </Container>
    </div>
  );
}

export default App;
