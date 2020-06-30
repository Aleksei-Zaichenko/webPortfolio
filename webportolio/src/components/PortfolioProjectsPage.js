import React, { useState } from "react";

//Imports for the style
import "./styles/PortfolioProjectsPage.css";

import { CardGroup, Card } from "react-bootstrap";

function PortfolioProjectsPage() {
  const [projects, setProjects] = useState([
    "first",
    "second",
    "third",
    "fourth",
  ]);

  return (
    <div id="projects" className="portfolioProjectsPage">
      <h1 style={{ textAlign: "center", margin: "4.5% 0 0" }}>
        Examples of some of my projects
      </h1>
      <CardGroup className="cardGroup">
        {projects.map((project) => (
          <Card bsPrefix="singleCard">
            <Card.Body>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Title>{project}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}

export default PortfolioProjectsPage;
