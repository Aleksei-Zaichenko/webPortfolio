import React from "react";
import "./App.css";

//components imports
import HomePage from "./components/HomePage";
import AboutMePage from "./components/AboutMePage";
import PortfolioProjectPage from "./components/PortfioProjectsPage";
import ContactMepage from "./components/ContactMePage";

//react bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar
        className="custom-navbar-style"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Brand href="#projects">Projects</Navbar.Brand>
          <Navbar.Brand href="#aboutme">About Me</Navbar.Brand>
          <Navbar.Brand href="#contact">Contact</Navbar.Brand>
        </Container>
      </Navbar>
      <HomePage />
      <AboutMePage />
      <PortfolioProjectPage />
      <ContactMepage />
    </div>
  );
}

export default App;
